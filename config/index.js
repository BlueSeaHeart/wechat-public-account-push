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
    {
      // 想要发送的人的名字
      name: "老婆",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oSIm45q-lf-24uYeHF_5gi7CQFyk",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "Yj2iVu02ILqO8NYG3oZWP0FVKzzh1iSnuwkSQMlZS5U",
      // 所在省份
      province: "陕西",
      // 所在城市
      city: "西安",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://weibo.com"
    },
    {
      name: "bluesea",
      id: "oSIm45kDM8hwP1GjbwOxMnZA5rrA",
      useTemplateId: "cf5DHu-bjAEsPZEiF_u2h14rOHwPyAl_xUPfCTZYJOs",
      province: "陕西",
      city: "西安",
      openUrl: "https://weibo.com"
    },
    {
      name: "浩子",
      id: "oSIm45uzdeJD-uLV2VOognObnv44",
      useTemplateId: "wUp8K-vWex555pgkkxmcz_mDTSOpsPemhDNBba4DhtI",
      province: "陕西",
      city: "西安",
      openUrl: "https://weibo.com"
    },
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
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你，就好像捡到了100斤的运气",
    ]},
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: ""


}
