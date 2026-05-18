import dayjs from 'dayjs'
import { selfDayjs, timeZone } from './src/utils/set-def-dayjs.js'
import {
    getAccessToken,
    getWeather,
    getCIBA,
    getOneTalk,
    getEarthyLoveWords,
    getPoisonChickenSoup,
    getMomentCopyrighting,
    getBirthdayMessage,
    sendMessageReply,
    getDateDiffList,
    getSlotList
} from './src/services/index.js'
import { config } from './config/index.js'
import { toLowerLine, getColor } from './src/utils/index.js'

const getAggregatedData = async () => {

  const weekList = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
  // 获取金山词霸每日一句
  let noteEn = '', noteCh = ''
  try {
    const cibaData = await getCIBA()
    if (cibaData) {
      noteEn = cibaData.content || ''
      noteCh = cibaData.note || ''
    }
  } catch (e) {
    console.error('获取金山词霸失败:', e)
  }

  // 获取每日一言
  let oneTalk = '', talkFrom = ''
  try {
    const oneTalkData = await getOneTalk(config.LITERARY_PREFERENCE)
    if (oneTalkData) {
      oneTalk = oneTalkData.hitokoto || ''
      talkFrom = oneTalkData.from || ''
    }
  } catch (e) {
    console.error('获取每日一言失败:', e)
  }

  // 获取土味情话
  let earthyLoveWords = ''
  try {
    earthyLoveWords = await getEarthyLoveWords()
  } catch (e) {
    console.error('获取土味情话失败:', e)
  }

  // 获取朋友圈文案
  let momentCopyrighting = ''
  try {
    momentCopyrighting = await getMomentCopyrighting()
  } catch (e) {
    console.error('获取朋友圈文案失败:', e)
  }

  // 获取毒鸡汤
  let poisonChickenSoup = ''
  try {
    poisonChickenSoup = await getPoisonChickenSoup()
  } catch (e) {
    console.error('获取毒鸡汤失败:', e)
  }

  // 统计日列表计算日期差
  const dateDiffParams = getDateDiffList().map(item => {
    return { name: item.keyword, value: item.diffDay, color: getColor() }
  })
  // 获取插槽中的数据
  const slotParams = getSlotList().map(item => {
    return { name: item.keyword, value: item.checkout, color: getColor() }
  })
  // 获取生日信息
  const birthdayMessage = getBirthdayMessage()


  const users = config.USERS
  for (const user of users) {

    // 获取每日天气
    let weather = '', maxTemperature = '', minTemperature = '', windDirection = '', windScale = ''
    try {
      const weatherData = await getWeather(user.province || config.PROVINCE, user.city || config.CITY)
      if (weatherData) {
        weather = weatherData.weather || ''
        maxTemperature = weatherData.temp || ''
        minTemperature = weatherData.tempn || ''
        windDirection = weatherData.wd || ''
        windScale = weatherData.ws || ''
      }
    } catch (e) {
      console.error('获取天气失败:', e)
    }

    // 集成所需信息
    const wxTemplateParams = [
      { name: toLowerLine('toName'), value: user.name, color: getColor() },
      { name: toLowerLine('date'), value: `${selfDayjs().format('YYYY-MM-DD')} ${weekList[selfDayjs().format('d')]}`, color: getColor() },
      { name: toLowerLine('province'), value: user.province || config.PROVINCE, color: getColor() },
      { name: toLowerLine('city'), value: user.city || config.CITY, color: getColor() },
      { name: toLowerLine('weather'), value: weather, color: getColor() },
      { name: toLowerLine('minTemperature'), value: minTemperature, color: getColor() },
      { name: toLowerLine('maxTemperature'), value: maxTemperature, color: getColor() },
      { name: toLowerLine('windDirection'), value: windDirection, color: getColor() },
      { name: toLowerLine('windScale'), value: windScale, color: getColor() },
      { name: toLowerLine('birthdayMessage'), value: birthdayMessage, color: getColor() },
      { name: toLowerLine('noteEn'), value: noteEn, color: getColor() },
      { name: toLowerLine('noteCh'), value: noteCh, color: getColor() },
      { name: toLowerLine('oneTalk'), value: oneTalk, color: getColor() },
      { name: toLowerLine('talkFrom'), value: talkFrom, color: getColor() },
      { name: toLowerLine('earthyLoveWords'), value: earthyLoveWords, color: getColor() },
      { name: toLowerLine('momentCopyrighting'), value: momentCopyrighting, color: getColor() },
      { name: toLowerLine('poisonChickenSoup'), value: poisonChickenSoup, color: getColor() },
    ].concat(dateDiffParams.concat(slotParams))

    user['wxTemplateParams'] = wxTemplateParams
  }

  return users
}

const getCallbackTemplateParams = (messageReply) => {
  const postTimeZone = timeZone()
  const postTime = dayjs().format('YYYY-MM-DD HH:mm:ss')
  return [
    { name: toLowerLine('postTimeZone'), value: postTimeZone, color: getColor() },
    { name: toLowerLine('postTime'), value: postTime, color: getColor() },
    { name: toLowerLine('needPostNum'), value: messageReply.needPostNum, color: getColor() },
    { name: toLowerLine('successPostNum'), value: messageReply.successPostNum, color: getColor() },
    { name: toLowerLine('failPostNum'), value: messageReply.failPostNum, color: getColor() },
    { name: toLowerLine('successPostIds'), value: messageReply.successPostIds, color: getColor() },
    { name: toLowerLine('failPostIds'), value: messageReply.failPostIds, color: getColor() },
  ]
}

const main = async () => {
  try {
    // 获取accessToken
    const accessToken = await getAccessToken()

    if (!accessToken) {
      console.error('获取 accessToken 失败，请检查 APP_ID 和 APP_SECRET 配置')
      return
    }

    // 处理好的用户数据
    const aggregatedData = await getAggregatedData()

    // 公众号推送消息
    const {
      needPostNum,
      successPostNum,
      failPostNum,
      successPostIds,
      failPostIds
    } = await sendMessageReply(aggregatedData, accessToken)

    // 获取回执信息
    const callbackTemplateParams = getCallbackTemplateParams({
      needPostNum,
      successPostNum,
      failPostNum,
      successPostIds,
      failPostIds
    })

    // 发送回执
    if (config.CALLBACK_TEMPLATE_ID) {
      await sendMessageReply(config.CALLBACK_USERS, accessToken, config.CALLBACK_TEMPLATE_ID, callbackTemplateParams)
    }
  } catch (error) {
    console.error('执行出错:', error)
  }
}

main()
