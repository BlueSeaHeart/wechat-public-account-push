export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  APP_ID: "wxfc7e4ae6b9cbedef",

  // 公众号APP_SECRET
  APP_SECRET: "596e858642505b67fbfcfec0d751d172",

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
   * [
   *  {
   *    // 想要发送的人的名字
   *    name: "老婆",
   *    // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
   *    id: "oSIm45kDM8hwP1GjbwOxMnZA5rrA",
   *    // 你想对他发送的模板消息的模板ID
   *    useTemplateId: "PrnfJnDjG0u5DE-RQSVOAw8z51gNCtl2dYQkDMnZuB8",
   *    // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
   *    openUrl: "https://wangxinleo.cn"
   *   },
   * ]
   */
  USERS: [
    // {
    //   // 想要发送的人的名字
    //   name: "老婆",
    //   // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
    //   id: "oSIm45q-lf-24uYeHF_5gi7CQFyk",
    //   // 你想对他发送的模板消息的模板ID
    //   useTemplateId: "Yj2iVu02ILqO8NYG3oZWP0FVKzzh1iSnuwkSQMlZS5U",
    //   // 所在省份
    //   province: "陕西",
    //   // 所在城市
    //   city: "西安",
    //   // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
    //   openUrl: "https://weibo.com"
    // },
    {
      name: "bluesea",
      id: "oSIm45kDM8hwP1GjbwOxMnZA5rrA",
      useTemplateId: "cf5DHu-bjAEsPZEiF_u2h14rOHwPyAl_xUPfCTZYJOs",
      province: "陕西",
      city: "西安",
      openUrl: "https://weibo.com"
    },
    {
      name: "me",
      id: "oSIm45kDM8hwP1GjbwOxMnZA5rrA",
      useTemplateId: "_uYv0i0P13pxzZyZPl2mZoHI38iNushGIT3fDMtOdTg",
      province: "陕西",
      city: "西安",
      openUrl: "https://weibo.com"
    },
    // {
    //   name: "阿晴",
    //   id: "oSIm45qKVGQ8dh07K6Y_6vAzIGqc",
    //   useTemplateId: "1XlaXWwOihXhnvopOWFGSPwjEfuGIUyxnQ4y3zCojnM",
    //   province: "陕西",
    //   city: "西安",
    //   openUrl: "https://weibo.com"
    // },
    // {
    //   name: "林",
    //   id: "oSIm45ugxkQPmVfQXYrVjEeXJ0xM",
    //   useTemplateId: "1XlaXWwOihXhnvopOWFGSPwjEfuGIUyxnQ4y3zCojnM",
    //   province: "辽宁",
    //   city: "大连",
    //   openUrl: "https://weibo.com"
    // },
    // {
    //   name: "君",
    //   id: "oSIm45p_4I5SWLLcbkrsS6tFQRHw",
    //   useTemplateId: "1XlaXWwOihXhnvopOWFGSPwjEfuGIUyxnQ4y3zCojnM",
    //   province: "陕西",
    //   city: "西安",
    //   openUrl: "https://weibo.com"
    // },
    // {
    //   name: "徐",
    //   id: "oSIm45iFtxd0zrXvhQKeVz8VxdjE",
    //   useTemplateId: "1XlaXWwOihXhnvopOWFGSPwjEfuGIUyxnQ4y3zCojnM",
    //   province: "陕西",
    //   city: "西安",
    //   openUrl: "https://weibo.com"
    // },
//     {
//       name: "老婆2",
//       id: "",
//       useTemplateId: "",
//       province: "",
//       city: "",
//       openUrl: "https://wangxinleo.cn"
//     },
//     {
//       name: "老婆3",
//       id: "",
//       useTemplateId: "",
//       province: "",
//       city: "",
//       openUrl: "https://wangxinleo.cn"
//     },
  ],

  /**
   * 回调消息 相关，主要用来展示发送是否成功/失败的数据
   */

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "bN3acsJkoGINRImUHC3q15Qc5RDABFpt7GlgvQwVbAA",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "bluesea",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oSIm45kDM8hwP1GjbwOxMnZA5rrA",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://weibo.com"
    },
  ],

  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "陕西",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "西安",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   */
  FESTIVALS: [
    {"type": "生日", "name": "老婆", "year": "1996", "date": "08-22"},
    {"type": "节日", "name": "我们结婚纪念日", "year": "2020", "date": "11-11"},
    // {"type": "生日", "name": "李四", "year": "1996", "date": "09-31"},
    // {"type": "节日", "name": "被搭讪纪念日", "year": "2021", "date": "09-01"},
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字;
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }}
    * */
  CUSTOMIZED_DATE_LIST: [
    // 结婚纪念日
    {"keyword": "marry_day", date: "2020-11-11"},
    {"keyword": "love_day", date: "2018-02-28"},
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }}
    * */
  SLOT_LIST: [
    // 早安问候语
    {"keyword": "morning_greeting", contents: [
      "早安呀~今天也要元气满满哦！(◕ᴗ◕✿)",
      "醒了吗小懒猪？太阳晒屁股了~",
      "宝贝早安！今天又是爱你的一天(✿◡‿◡)",
      "起床啦！新的一天，新的爱你~",
    ]},
    // 今天吃什么推荐
    {"keyword": "today_eat", contents: [
      "今天建议吃：火锅！辣辣的才开心~",
      "今天建议吃：奶茶！快乐水不能少~",
      "今天建议吃：烧烤！晚上约起来~",
      "今天建议吃：寿司！精致一点~",
      "今天建议吃：小龙虾！剥壳也是一种乐趣~",
    ]},
    // 撩妻小技巧
    {"keyword": "love_tip", contents: [
      '今日撩妻小技巧：突然抱住她，说"终于抓到你了"',
      "今日撩妻小技巧：趁她不注意，偷亲一下",
      "今日撩妻小技巧：帮她捏捏肩膀，夸她辛苦了",
      "今日撩妻小技巧：牵她的手，十指紧扣",
      '今日撩妻小技巧：看着她眼睛，说"你真好看"',
    ]},
    // 幸运信息
    {"keyword": "lucky_info", contents: [
      "今日幸运数字：888，幸运颜色：粉色",
      "今日幸运数字：520，幸运颜色：红色",
      "今日幸运数字：666，幸运颜色：金色",
      "今日幸运数字：1314，幸运颜色：紫色",
      "今日幸运数字：99，幸运颜色：白色",
    ]},
    // 结尾甜言蜜语
    {"keyword": "sweet_end", contents: [
      "宝贝，今天也要开开心心的哦~",
      "爱你爱你爱你，今天也是~",
      "记得想我，我也在想你~",
      "今天也要好好照顾自己哦，我会心疼的~",
    ]},
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: ""


}
