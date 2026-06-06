import type { LiberationAtlasBattleCandidateSummary, LiberationAtlasCandidate } from "../types/war";

export const liberationAtlasReviewRoot = "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/06_图册页归属审查";

export const liberationAtlasCandidateSummary = {
  "total": 49,
  "battleCount": 6,
  "strong": 36,
  "medium": 13,
  "mapLike": 19,
  "reviewTablePath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/06_图册页归属审查/图册页归属专家判定表.csv",
  "publicAssetRoot": "/maps/liberation-war-atlas-1945-1950"
} as const;

export const liberationAtlasBattleSummaries: LiberationAtlasBattleCandidateSummary[] = [
  {
    "battleId": "battle-central-plains-breakout",
    "battleName": "中原突围",
    "total": 3,
    "strong": 1,
    "medium": 2,
    "mapLike": 1
  },
  {
    "battleId": "battle-huaihai-1948",
    "battleName": "淮海战役",
    "total": 9,
    "strong": 9,
    "medium": 0,
    "mapLike": 4
  },
  {
    "battleId": "battle-liaoshen-1948",
    "battleName": "辽沈战役",
    "total": 12,
    "strong": 7,
    "medium": 5,
    "mapLike": 4
  },
  {
    "battleId": "battle-menglianggu-1947",
    "battleName": "孟良崮战役",
    "total": 5,
    "strong": 2,
    "medium": 3,
    "mapLike": 2
  },
  {
    "battleId": "battle-pingjin-1948",
    "battleName": "平津战役",
    "total": 14,
    "strong": 12,
    "medium": 2,
    "mapLike": 7
  },
  {
    "battleId": "battle-yangtze-crossing-1949",
    "battleName": "渡江战役",
    "total": 6,
    "strong": 5,
    "medium": 1,
    "mapLike": 1
  }
];

export const liberationAtlasCandidates: LiberationAtlasCandidate[] = [
  {
    "battleId": "battle-central-plains-breakout",
    "battleName": "中原突围",
    "sequence": "012",
    "confidence": "strong",
    "pageTypeCandidate": "地图/态势图页",
    "matchedTerms": [
      "中原军区部队突围"
    ],
    "titleCandidates": [
      "中原军区部队突围形势要图 Y",
      "作战，根据敌大部兵力在东线和北线的情况，决定"
    ],
    "ocrExcerpt": "id 111 114 116 ee 109f dt a Vii 河 PS — 中原军区部队突围形势要图 Y ao na 曹县 1946年6月 一 7月 郑县 ~ 到 a 局 宝 郑州 Bf —v\\ i So -一个一 BE =. 90军61师 PA N\\ ES 新郑9 me ca 1@\\ 0 a tS 瞧县”商丘 I tt 临 34 SEE i 区 BEN 许 IN 留他坪 y eat or S. 黑烟镇 K x iy fh 7 RH 唐 河 LLG 4 152 遂平 和 Par wa KR ‘\\ 又阴 汉 AR Di lea na 河 沁阳 河 一 3% 均县 —~ Be Ee JJ/ e正阳 i * yn _~ 水 光化 ES...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_012_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-central-plains-breakout_scan_012_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_012_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "141"
  },
  {
    "battleId": "battle-central-plains-breakout",
    "battleName": "中原突围",
    "sequence": "013",
    "confidence": "medium",
    "pageTypeCandidate": "总览/背景页",
    "matchedTerms": [
      "中原军区",
      "突围"
    ],
    "titleCandidates": [
      "中原形势略图 ，",
      "大量敌人，有力地援助了其它战场的作战，对于粉"
    ],
    "ocrExcerpt": "«iio & (郑州 1945年10月 = Be 等部在镇安、梓水地区稍事休整后，为分散敌军兵 下 GLA a 人 me a 力 决定继续西进，突破胡宗南集团的多次堵击 ， x i | jis sk ET 8 月31日 ,返抵陕甘 边区 。 ij 9 Ki ae) | | \\ Fae ots s yay 苏 本一一大 ae 了二 os S34 = 向西南方向突围部队 1 万余人，由河南省光山 区， ISSN= 路 让 Ee Jit RETR Ae eR Ht 经激战，于7月工晶 a = = Fe AN AN der nit ik a 全部突过了平汉铁路。原定转往移西,因敌情变化 一南召 叶县; Ry, sc ADE 〈即汉水，训樊市...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_013_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-central-plains-breakout_scan_013_medium.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_013_raw.txt",
    "riskTags": "needs-human-check",
    "reason": "combined_context_terms",
    "detectedPageNumber": "142"
  },
  {
    "battleId": "battle-central-plains-breakout",
    "battleName": "中原突围",
    "sequence": "020",
    "confidence": "medium",
    "pageTypeCandidate": "待人工判断",
    "matchedTerms": [
      "中原军区",
      "突围"
    ],
    "titleCandidates": [
      "陇海路注徐段战役 全面内战爆发后，薪介石在",
      "此，我军确定了下一步作战计划",
      "定陶战役",
      "陇海路滞徐段战役以后， 蒋介石又从",
      "企图接应 181 旅突围 ，而我第二阶段作战命令又被",
      "敌截获,暴露了企图 。我为掌握战役主动权，创"
    ],
    "ocrExcerpt": "牧集地区西援民权，进至柳河集及其以西地区 ; 整 路北休整 。 陇海路注徐段战役 全面内战爆发后，薪介石在 调集重兵，加紧追堵我中原军区部队，并大举进攻 编68师 4 MA HAH AR , REL R HME KRRKAKERER ATR, HAS 个保安 苏皖解放区的同时，在鲁南、和耶北、晋南等地也发 同时，蒋介石又从耶西、陕南围妃堵截中原我军的 团等共13800余人 KA . OK =H we Hit 5 城和车站10余处，破坏铁路 150 RAE, 动了或准备发动进攻 . WER BI (TH) 徐 部队中抽出整编 3 师.41师,47师计7 个旅的兵力 ， ( ) 段及其以南、新黄河以东的广大地区，只配 向开封一线急进 。...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_020_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-central-plains-breakout_scan_020_medium.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_020_raw.txt",
    "riskTags": "needs-human-check",
    "reason": "combined_context_terms",
    "detectedPageNumber": "149"
  },
  {
    "battleId": "battle-huaihai-1948",
    "battleName": "淮海战役",
    "sequence": "057",
    "confidence": "strong",
    "pageTypeCandidate": "地图/态势图页",
    "matchedTerms": [
      "淮海"
    ],
    "titleCandidates": [
      "苏中苏北我军作战 SHAKER» Him",
      "山东野战军先后转入山东解放区作战 。坚持在敌后",
      "军，配合了我军在华东战场及其他战场的作战 。",
      "线对敌作战的一个贾侧战场, 其战略地位荔形重要 。",
      "的联系，为尔后我军机动作战创造条件，并策应刘",
      "苏中苏北我军作战要图 _"
    ],
    "ocrExcerpt": "面战场转入战略进攻 。 军，配合了我军在华东战场及其他战场的作战 。 到苏中地区，加强防守 。 1947年 8 月，当战争进入第二年 ，人民解放军 10月中名，为策应华东野战军第 3 ODA Roe 转入全国规模的进攻后 ，苏中、苏北便成为我军南 苏向津浦路东进，华中指挥部率11 、12纵队 4 个旅 线对敌作战的一个贾侧战场, 其战略地位荔形重要 。 北上淮海 。第11纵队 主力与12纵队一部于10月16日 国民党为巩固其心腹地区，消除我军对京沪杭的威 攻克新安镇，12纵队主力攻克淮沫线上之丁集、五 胁，在组织中原防御和对胶东实施“九月攻势”的 里庄等地，从而改善了淮海西南地区的斗争形势 。 同时 ，对我苏中、苏北地区加紧进行“清...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_057_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-huaihai-1948_scan_057_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_057_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "186"
  },
  {
    "battleId": "battle-huaihai-1948",
    "battleName": "淮海战役",
    "sequence": "067",
    "confidence": "strong",
    "pageTypeCandidate": "地图/态势图页",
    "matchedTerms": [
      "淮海"
    ],
    "titleCandidates": [
      "苏北兵团作战",
      "起攻击。自3月16日至19日",
      "中原和山东我军的作战，并为我军尔后渡江南",
      "东战役和津浦路中段战役, 苏北",
      "战场的作战任务。同时，原苏中、苏北两个军",
      "苏北兵团作战经过要图"
    ],
    "ocrExcerpt": "羊寨地区 ,与坚持敌后斗争的华东野 ak 战斗后，敌人纠集10个整编师22个旅 滨海军分区武装,向陇海路东段发动攻势 战军第11、第12纵队组成苏北兵团， 担负苏北 的兵力 ，从 4月初起 对我进行 清制 攻克房山街 阿湖 、城头 据点,政敌 4000余 战场的作战任务。同时，原苏中、苏北两个军 41H ，亡图压缩我军至盐乍狭小地区，然 井一步开展了滨海 、淮海区的局面 继于7月 也合组成苏北军区，原华中指挥部撤销 。此 后 集中兵力，南北夹击我军 。 Suk ae 上 、中各 攻克过水 IRS Wm , ER a 东局 东军区依据中央指示精神，于 as 5000余人,孤立了淮阴淮安之敌 。与此同时 我苏中沿江地区及淮南地区军民亦广...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_067_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-huaihai-1948_scan_067_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_067_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "196"
  },
  {
    "battleId": "battle-huaihai-1948",
    "battleName": "淮海战役",
    "sequence": "073",
    "confidence": "strong",
    "pageTypeCandidate": "地图/态势图页",
    "matchedTerms": [
      "淮海战役/淮海"
    ],
    "titleCandidates": [
      "中共中央\\人民解放军总部转战华北路线图",
      "两年作战,共歼敌264万余人，不但打退了国民党的军事进攻 ，",
      "市，同敌人的强大机动兵团作战，打前所未有的大歼灭战，分",
      "余人; 9 、10月间华北我军第 2 、3 兵团发动了察南绥东战役 ，",
      "我军发动了济南战役，全歼守敌10万余人 (包括起义2万人)，",
      "了人民解放战争中具有决定意义的三个战略性战役一一辽沈战"
    ],
    "ocrExcerpt": "弱，其政治和经济危机进一步加深 。整个国 以毛泽东为首的中共中央、中央军委审时度势，当机立断， 民党营全中，充满着严重的失败情绪 。 以雄伟的革命胆略和卓越的军事艺术，及时而连续地组织指挥 国民党为挽救其日益危殉的反动统治，除在政治 经济上 了人民解放战争中具有决定意义的三个战略性战役一一辽沈战 更加依靠美沉国主义，更加残酷地镇压人民民主运动和搜刮剥 役 、淮海战役 和平津战役 ,总称三大战役 。 a 夺人民和群众外，在军事上于1948年 8 月决定由“分区防御”改 辽沈战役于1948年 9月12日至11月 2 日间进行 , 共歼敌47 为“重点防御”，企图收缩战线，集中兵力，依托战略要点， 万人，解放了东北全境，使解放战争获得了战...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_073_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-huaihai-1948_scan_073_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_073_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "202"
  },
  {
    "battleId": "battle-huaihai-1948",
    "battleName": "淮海战役",
    "sequence": "075",
    "confidence": "strong",
    "pageTypeCandidate": "待人工判断",
    "matchedTerms": [
      "淮海战役/淮海"
    ],
    "titleCandidates": [
      "济南战役",
      "敌企图制止我军的攻势，曾组织多次反冲击，但均",
      "Dee 我军外围作战进攻方向",
      "图长期固守 。",
      "的战役方针",
      "为战役预备队 。在打援"
    ],
    "ocrExcerpt": "flu! i 个军2 万人起义 ) RF 2 Re Kk” AOE fp eg 武， 严重打击了敌人的重点防御计划，动摇了敌人 ith met hoa! Hi 据守大城市进行顽抗的信心 。济南的攻克，使山东 IU a ie 全境基本解放， 使 华东两大解放区 完全连成 Me, ty 一片，并使华东我军可以全力南下作战 ，为尔后发 HR Bik iH 4 起淮海战役创造了极为有利的条件 wr. -一 SS bit Bat See 中南纵队 13 “il je Se it it at oe | | BN 13H {i} wi er Huai THE ii TI fe | A 大 a pare iy Sa 我军 20日晚一22日中午进攻方...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_075_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-huaihai-1948_scan_075_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_075_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "204"
  },
  {
    "battleId": "battle-huaihai-1948",
    "battleName": "淮海战役",
    "sequence": "081",
    "confidence": "strong",
    "pageTypeCandidate": "战役正文/总述页",
    "matchedTerms": [
      "淮海战役/淮海/碾庄"
    ],
    "titleCandidates": [
      "淮海战役",
      "淮海战役是伟大的战略决战的第二个",
      "大战役，是我华东、中原两大野战军和军区部队 ,",
      "次战略性的战役",
      "济南战役之后，敌徐州",
      "我军关于淮海战役的方针和任务，曾有一个酝"
    ],
    "ocrExcerpt": "Ne 淮海战役 淮海战役是伟大的战略决战的第二个 Vij Us a — 二 —_ 临 — 大战役，是我华东、中原两大野战军和军区部队 , i= i WX fF 5 要 医 在以徐州为中心 ’ 东起海州 ? 西止商丘 北起临城， nan rune ee) 月 -可 南达淮河的广大地区内进行的 次战略性的战役 济南战役之后，敌徐州 BIR ee acip ay AN» 于我军的强大威力，从9 AIR BIA Hit = ses 出菏泽 沂等地，实行以徐州为中心的 攻势防 af 欢墩起 青口 hs ; 御 11月4日狂介石又决定把刘峙集团集中于徐 lem i 蚌埠间津浦路两侧地区守备 ; 并将由国防部直 接指挥之第12兵团 (RAKE)...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_081_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-huaihai-1948_scan_081_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_081_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "210"
  },
  {
    "battleId": "battle-huaihai-1948",
    "battleName": "淮海战役",
    "sequence": "082",
    "confidence": "strong",
    "pageTypeCandidate": "待人工判断",
    "matchedTerms": [
      "淮海战役/淮海/双堆集"
    ],
    "titleCandidates": [
      "综苏独立旅发起了津浦铁路徐蚌段作战 PR 4 纵",
      "加阻击李延年兵团作战外，集中6 SAK . Rie",
      "攻集团围歼黄百才兵团之作战 。激战至20日拂晓 ，",
      "定局 。但为配合平津战役的发起，我军遵照中央军",
      "淮海战役中国民党军第 12 兵团构筑的汽车防线 ，",
      "SH BUE 。伟大的淮海战役胜利结束 。我军乘胜追"
    ],
    "ocrExcerpt": "北对进的企图破产 。 独立旅和陕南12旅及华野7 、13纵等部，于12月 3 加紧围歼黄百帮兵团 ; 以 3 个纵队位于苑山至大许 在这一情况下，萍介石为保存其炳系主力 ，以 日向黄维兵团发起总攻。后又增加华野 3 纵队参战。 家之间从正面顽强阻击由徐州东援之敌 ; 以7 个纵 避免全军履没的命运，一面命令蚌埠的李延年、刘 至15日夜，终于将该兵团全部歼灭于双堆集地区 ， 队继续向徐州方向遥远，威胁援敌之侧收，保障主 汝明兵团再次北援 ; 一面命令徐州“得总”副司令 俘敌兵团司令黄维。 攻集团围歼黄百才兵团之作战 。激战至20日拂晓 ， HEAR. ER HER 3 个兵团，放弃徐 第三阶段 : 全歼杜幸明集团。黄维兵团被歼后; 我...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_082_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-huaihai-1948_scan_082_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_082_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "211"
  },
  {
    "battleId": "battle-huaihai-1948",
    "battleName": "淮海战役",
    "sequence": "083",
    "confidence": "strong",
    "pageTypeCandidate": "战斗序列/统计页",
    "matchedTerms": [
      "淮海战役/淮海"
    ],
    "titleCandidates": [
      "淮海战役我军战斗序列表",
      "绥区,战役发起后归该兵团建制)",
      "注 : 战役初期敌共5 个兵团 ，3 个绥区，26个军，63个师 ; 连同战中新增加及新"
    ],
    "ocrExcerpt": "| ah —— ————— — ee 一过em、 一< 7 “各 a 多/ Sah ge tee - ~*~ TS Moa GE! art MA ee a —— SS — Nessa 十人桥一在围歼黄百钼兵团时 «BR TCE. 0 Ha, 在敌人的火力封锁下, 以 身体支撑着两个梯子，架起了桥，保证了进攻部队四个连迅速通过 。 版画 : I 2 [mc一 淮海战役我军战斗序列表 2上一 ve ral (19484117) (1948 411A) 一第 5 军一第45、第46、第200师 第 1 4 队 一-一第1、第2、第20 ik 第 70 军一第32、第96、第139师 第 74 军一第51、第57、第58师 第 2 纵 队一...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_083_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-huaihai-1948_scan_083_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_083_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "212"
  },
  {
    "battleId": "battle-huaihai-1948",
    "battleName": "淮海战役",
    "sequence": "089",
    "confidence": "strong",
    "pageTypeCandidate": "地图/态势图页",
    "matchedTerms": [
      "淮海战役/淮海"
    ],
    "titleCandidates": [
      "ss",
      "西北战场冬季战役要图 ，",
      "西北冬季战役",
      "荔北战役后，敌胡宗南集团将其",
      "临斥、乳罗山作战，使敌误认为我军将在温 、",
      "西北我军冬季战役共歼敌第76军及144 师 17",
      "南集团 ，配合了我军其他战场的作战，使蒋介石企"
    ],
    "ocrExcerpt": "钳制和拖住了胡宗 这时，全国军事形势已发生重大变化 ，继济南 区 ，准备侧击西援之敌 。21日，我右层兵团进至陈 南集团 ，配合了我军其他战场的作战，使蒋介石企 大捷和东北全境解放之后， 我军正发起规模巨大的 炉镇、薛村镇、美原镇一线，继而在韩村、康庄地 图抽调胡宗南集团之兵力解救其他战场危局的计划 区歼敌西调之17 师一部，又于23日向铜川以东之据 落空 淮海战役 。西北我军为配合淮海战役,钳制 胡宗南 集团，不使其抽兵东调; HA KRS ABBR op 点攻击，歼敌一部, 乘胜攻占黄堡镇及其车站 。 阳、白水地区 ，决心发动冬季战役 ，以一部兵力突 当我右相兵团围歼敌17师时，敌又误认为我军 然攻击敌军第一线3个集团中之 1...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_089_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-huaihai-1948_scan_089_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_089_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "218"
  },
  {
    "battleId": "battle-huaihai-1948",
    "battleName": "淮海战役",
    "sequence": "095",
    "confidence": "strong",
    "pageTypeCandidate": "战役正文/总述页",
    "matchedTerms": [
      "淮海战役/淮海"
    ],
    "titleCandidates": [
      "渡江战役",
      "三大战役以后，人民解放军一面进行",
      "休整和统一整编，一面积极进行渡江作战和向全国",
      "进军的准备 。中央军委决定仍以淮海战役的总前委",
      "继续指挥渡江战役 。",
      "MAES, EL, 战役第一阶段结束 。"
    ],
    "ocrExcerpt": "渡江战役 三大战役以后，人民解放军一面进行 无锡等地 。切断了宁沪铁路。8 兵团一部占领南京。 NG \\ == 休整和统一整编，一面积极进行渡江作战和向全国 国民党军第 2 舰队在南京以东江面起义，另一部于 ] 进军的准备 。中央军委决定仍以淮海战役的总前委 镇江江面投降 。中突击集团一部占领芜湖，主力湾 继续指挥渡江战役 。 过青飞江，在湾泪地区 歼敌20军大部和99军一部 。 长江， 是中国的第一大江，自西向东横贯中国 西突击集团攻占了贵池、青阳和马当等地 ，歼灭国 ORB 江 中部，全长6300余公里，历来被视为难以逾越的天 民党军一部 。与此同时，第4 野战军12兵团和中原 ite e) 1 HASH ELAR AM, PR...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_095_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-huaihai-1948_scan_095_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_095_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "一"
  },
  {
    "battleId": "battle-liaoshen-1948",
    "battleName": "辽沈战役",
    "sequence": "073",
    "confidence": "strong",
    "pageTypeCandidate": "地图/态势图页",
    "matchedTerms": [
      "辽沈战役/辽沈"
    ],
    "titleCandidates": [
      "中共中央\\人民解放军总部转战华北路线图",
      "两年作战,共歼敌264万余人，不但打退了国民党的军事进攻 ，",
      "市，同敌人的强大机动兵团作战，打前所未有的大歼灭战，分",
      "余人; 9 、10月间华北我军第 2 、3 兵团发动了察南绥东战役 ，",
      "我军发动了济南战役，全歼守敌10万余人 (包括起义2万人)，",
      "了人民解放战争中具有决定意义的三个战略性战役一一辽沈战"
    ],
    "ocrExcerpt": ",我军与国民党军进行战略决战的时机已经到来 。 人 锐，战斗力大大减弱，其政治和经济危机进一步加深 。整个国 以毛泽东为首的中共中央、中央军委审时度势，当机立断， 民党营全中，充满着严重的失败情绪 。 以雄伟的革命胆略和卓越的军事艺术，及时而连续地组织指挥 国民党为挽救其日益危殉的反动统治，除在政治 经济上 了人民解放战争中具有决定意义的三个战略性战役一一辽沈战 更加依靠美沉国主义，更加残酷地镇压人民民主运动和搜刮剥 役 、淮海战役 和平津战役 ,总称三大战役 。 a 夺人民和群众外，在军事上于1948年 8 月决定由“分区防御”改 辽沈战役于1948年 9月12日至11月 2 日间进行 , 共歼敌47 为“重点防御”，企图收缩战线...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_073_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-liaoshen-1948_scan_073_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_073_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "202"
  },
  {
    "battleId": "battle-liaoshen-1948",
    "battleName": "辽沈战役",
    "sequence": "077",
    "confidence": "strong",
    "pageTypeCandidate": "战役正文/总述页",
    "matchedTerms": [
      "辽沈战役/辽沈"
    ],
    "titleCandidates": [
      "WAR 辽沈战役是东北我军1948年 9 月12日至11月 2 日在",
      "辽宁省西部和沈阳、长春地区进行的一系列攻防战役的总称 ，",
      "是伟大战略决战的第一个战役 。",
      "封闭薪军在东北加以各个歼灭的预想 。在《关于辽沈战役的作战",
      "大歼灭战的决心，并据此考虑作战计划，筹办全军军需和处理俘",
      "于9月12日发起辽沈战役 。全"
    ],
    "ocrExcerpt": "MA = 44 WAR 辽沈战役是东北我军1948年 9 月12日至11月 2 日在 60% ex) 辽宁省西部和沈阳、长春地区进行的一系列攻防战役的总称 ， 1 兵团部 、 a TF (Ba) X Ca KV, 10°19 是伟大战略决战的第一个战役 。 aoe ya 1948年秋，在东北战场上，, 我已处于全面的压倒优势 . KE # 总兵力已达105 万，其中野战军12个纵队 ，1个炮兵纵队，连同 Vie 独立师，正规军达70余万 。由于新式整军运动和大练兵运动的开 iL) =O) 展，我军战斗力大为提高 ; 由于土地改革的完成，我军后方空前 (BAR So 巩固 。此时，东北国民党军尚有55万余人，被迫危缩于长春(1个 兵团...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_077_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-liaoshen-1948_scan_077_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_077_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "206"
  },
  {
    "battleId": "battle-liaoshen-1948",
    "battleName": "辽沈战役",
    "sequence": "078",
    "confidence": "strong",
    "pageTypeCandidate": "地图/态势图页",
    "matchedTerms": [
      "辽沈战役/辽沈/锦州战役"
    ],
    "titleCandidates": [
      "锦州战役要图",
      "战役第一阶段结束 。",
      "HE HB TEAR 。战役第二阶段胜利结束 。",
      "至此，历时50多天的辽沈战役，以我军取得歼",
      "一战役，使我军获得了进行大规模歼灭战的经验和",
      "略预备队 。这对尔后平津战役的胜利，加速全国解"
    ],
    "ocrExcerpt": "7 Ey 老虎沟 3H (ERB) 锦州战役要图 hs 1948年10月9日-15日 北集团炮群 BK ii 修 6纵17师 See Ret yt RERE RSW we RQ) 4 i 5 ii 7 ee ria | Wh Fit ME” NEE A 第6兵团 单屯 N 暂22师、184 北大营” 于\\54师 we Bet 8纵 a —— {22 AN 18师 | NAS 23 Sip ANN 小岭子o 南山 Cs fii OM 26师 27师 并 上 19师 xe i ca 儿 双山 79师 +H 1 FER 4 我军开进方向 Ww ye 我军第一阶段进攻方向 c老爷庙 我军第二阶段进攻方向 GS.) 我军炮兵阵地 朝阳堡 敌军...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_078_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-liaoshen-1948_scan_078_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_078_raw.txt",
    "riskTags": "broad-context-page",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "9"
  },
  {
    "battleId": "battle-liaoshen-1948",
    "battleName": "辽沈战役",
    "sequence": "079",
    "confidence": "strong",
    "pageTypeCandidate": "战斗序列/统计页",
    "matchedTerms": [
      "辽沈战役/辽沈"
    ],
    "titleCandidates": [
      "辽沈战役国民党军战斗序列表",
      "辽沈战役我军战斗序列表",
      "人民解放军空军最早的战斗机之一 。辽沈战役中缴自国民党军，美制"
    ],
    "ocrExcerpt": "_ ae e 3 eas irae <* te ie W a i —— AAA 名 以 8 * oes Le <i “y Bt. bisa 21 3h 8 a 辽沈战役国民党军战斗序列表 辽沈战役我军战斗序列表 (1948年9月) (1948年9月) 第93军 (暂18 、暂20 、暂22 师) 东 挥 _ 第6兵团 -一第1纵队 第1、第2 、第3师 北所 司令 PRR i 第184师 ey = 上第2纵队 第4、第5 、第6师 [总任 1 新8军 (#88. B54 、暂62 、暂55师 ) -一第1 兵团 $B WG 一第3纵队 第7、第8 、第9师 东 州 汉 第54军 (第8 、第198 | H57 im) 北 BAW |...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_079_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-liaoshen-1948_scan_079_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_079_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "208"
  },
  {
    "battleId": "battle-liaoshen-1948",
    "battleName": "辽沈战役",
    "sequence": "084",
    "confidence": "strong",
    "pageTypeCandidate": "地图/态势图页",
    "matchedTerms": [
      "辽沈战役/辽沈"
    ],
    "titleCandidates": [
      "am 敌我态势图",
      "平津战役是战略决战中具有决定意义",
      "的第三个大战役，是东北野战军、华北军区两个野",
      "一次战略性战役",
      "1948年11月初，辽沈战役结束后，华北之敌已",
      "为加强平津战役的集中统一"
    ],
    "ocrExcerpt": "FIZ sa 津战役 平津战役是战略决战中具有决定意义 同时指示中原 、华东我军，留下杜 3.4.84 的第三个大战役，是东北野战军、华北军区两个野 JAY 华北2兵 幸明集团，暂不作最后歼灭之部署 战兵团和地方武装一部，在平、津、张地区进行的 免使蒋介石迅速决策海运平津诸敌 二本 5.4. 一次战略性战役 南逃 。 Pe wea? 行 1948年11月初，辽沈战役结束后，华北之敌已 遵腿上述命令，自11月22日起 Za ae RRGZS, AFT, EU? BH, RE wU? SH 东北野战军主力 10个纵队，连同特 ——_ 人 不定 。由于敌错误地估计我东北野战军至少需要三 种兵纵队共80万人，分由冷口、喜 ke PRR ae...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_084_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-liaoshen-1948_scan_084_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_084_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "213"
  },
  {
    "battleId": "battle-liaoshen-1948",
    "battleName": "辽沈战役",
    "sequence": "091",
    "confidence": "strong",
    "pageTypeCandidate": "待人工判断",
    "matchedTerms": [
      "辽沈战役/辽沈"
    ],
    "titleCandidates": [
      "绥东战役",
      "察绥战役后,我军已在华北北",
      "呆贺图 。26日 ,我 8 纵主力和1 纵2",
      "定) 北战役 ， mena, 使",
      "这时，东北我军正准备发起辽沈战役 。中央军",
      "配合东北我军作战"
    ],
    "ocrExcerpt": "2 旅沿平缓路西 1 4 起保 ( 定) 北战役 ， mena, 使 进，至28日占领卓资山至白塔段铁路 。与此同时 Lin Q :, ima By ae 向喜东增援之敌 2 个军另 2 个师不得不回调涿县 我2 6 纵队向归绥独进。25日 ，2 Woe AR, \\\\ RS 26 日 6 纵占领和林格尔 th, 我以突然动作解 山寺 这时，东北我军正准备发起辽沈战役 。中央军 放了绥东广大地区 , BHT IR, (Y NS “a ha 委指示华北我军， 为钳制 北传作义集团，不使其 傅作义为解归组之危，急调平 、张地区之35军 增援东北，并为尔后全歼华北敌军创造条件 ,应以 暂4军、新骑4 师等步骑10个师星夜西援 。其先头 NA...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_091_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-liaoshen-1948_scan_091_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_091_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "220"
  },
  {
    "battleId": "battle-liaoshen-1948",
    "battleName": "辽沈战役",
    "sequence": "092",
    "confidence": "strong",
    "pageTypeCandidate": "战役正文/总述页",
    "matchedTerms": [
      "辽沈"
    ],
    "titleCandidates": [
      "海、平津三大战役后，国民党军主力已被消灭，其",
      "作战部队只剩下 100余万人，分布在新疆到台湾的"
    ],
    "ocrExcerpt": "军退却方向 ig 44444 4 我军进攻方向 1a 4444 TS 游击区 <+— 国民党军总部逃跑方向 <a — 一一一 {im ae i 3} A) ——— — i KERR oaae 敌军阻击阵地 民 ray UN. (Hy S— 1 ee S= 二 = = — iL (LEE —— == = So Se 100 中国人民解放军战略进攻形势 (=) 辽沈、淮 国民党内部更加四分五裂，众叛亲离 。形势非常明 我党进行和平谈判，企图在和平的烟幕下，争取时 海、平津三大战役后，国民党军主力已被消灭，其 显 ，只要我军再作若干重大攻击，摇摇欲聆的国民 间，重整军备，依托长江天思，阻止我军南下，以 作战部队只剩下 100余万人，分布在...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_092_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-liaoshen-1948_scan_092_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_092_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "221"
  },
  {
    "battleId": "battle-liaoshen-1948",
    "battleName": "辽沈战役",
    "sequence": "047",
    "confidence": "medium",
    "pageTypeCandidate": "总览/背景页",
    "matchedTerms": [
      "锦州",
      "长春",
      "沈阳/东北",
      "锦州"
    ],
    "titleCandidates": [
      "中国人民解放军战略进攻形势 (一)",
      "解放战争",
      "第一年的伟大胜利，使全国的战争形势发生了重大",
      "队一举突破敌人黄河防线， 发起鲁西南战役 ,给敌",
      "士气旺盛，作战能力有很大提高 。由于解放区土地",
      "规定“我军第二年作战的基本任务是 : 举行全国性"
    ],
    "ocrExcerpt": "主力，首先牵制鲁西南之敌，配合晋责 430 万人下降为 373 万，其中正规军由 200 万人降 和鲁耶野战军主力挺进大别山，和尔后向夭皖苏地区实 为 150 万人，能够用于机动者仅有40个旅 ; 士气低 施战略展开 。同时，以西北野战军北攻榆林，调敌 落，战斗力大为削弱 。从战略态势上看，国民党军 胡宗南集团向北，配合太岳兵团南渡 ; 以华东内线 在北线的东北、热河和纳东已完全转入守势 ; 在南 部队牵制山东之敌，配合华东野战军外线兵团的战 线，其“重点进攻”所造成的王铃形态势，使其主 略进攻行动 。 力深陷于山东和陕北两个战场，已是强紫之末，连 =, 19474 6 30H , FRERBRREEH AAA 接这两个战场的中间地...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_047_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-liaoshen-1948_scan_047_medium.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_047_raw.txt",
    "riskTags": "needs-human-check|overview-page-risk",
    "reason": "combined_context_terms",
    "detectedPageNumber": "176"
  },
  {
    "battleId": "battle-liaoshen-1948",
    "battleName": "辽沈战役",
    "sequence": "048",
    "confidence": "medium",
    "pageTypeCandidate": "总览/背景页",
    "matchedTerms": [
      "锦州",
      "长春",
      "沈阳"
    ],
    "titleCandidates": [
      "开新的攻势作战，发展战略进攻的成果 。",
      "胶济路西段 、中段和津浦路中段战役，解放了除",
      "挥华东野战军一部，先后举行宛西、宛东战役 。",
      "线北段 、察南绥东、出击责热察等战役 ; THE",
      "下，举行了称东战役 。以上作战歼灭大量敌军，",
      "军区第一兵团) 于 3 月初发起临汾战役 ，6 月中"
    ],
    "ocrExcerpt": ") 于 3 月初发起临汾战役 ，6 月中 将敌中原防御体系打得支离破碎 。 旬又发起晋中战役，孤立并包围了太原 。 在此同时，西北我军于 3 月取得宜川、瓦子 在战争的第二年内 ，人民解放军共歼敌 152 街大捷，随后又发起西府、陇东战役 KARE 万余人;解放土地15.5万平方公里, 人口3700万 。 ~ A, -2 发起了规模巨大的冬季攻势，迫敌龟缩于长春、 战争已主要不是在老解放区内进行 而是在国民 沈阳 、锦州等几个孤点。山东兵团〈即华东野战 党统治区内进行了 。 177",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_048_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-liaoshen-1948_scan_048_medium.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_048_raw.txt",
    "riskTags": "needs-human-check|overview-page-risk",
    "reason": "combined_context_terms",
    "detectedPageNumber": "177"
  },
  {
    "battleId": "battle-liaoshen-1948",
    "battleName": "辽沈战役",
    "sequence": "060",
    "confidence": "medium",
    "pageTypeCandidate": "地图/态势图页",
    "matchedTerms": [
      "锦州",
      "长春",
      "沈阳/辽西",
      "沈阳/东北",
      "锦州"
    ],
    "titleCandidates": [
      "攻势作战要图",
      "于运动中歼灭之 。于是，战役进入第三阶段 。"
    ],
    "ocrExcerpt": "S Se 敌军第一阶段进攻方向 BUY “xX 7 ha ay Ly > 敌军第二阶段进攻方向 Oe: 二 Kc DA 上ss 敌军第三阶段进攻方向 ap te pees Kl RK 瘤 sah , XY isn / CPE pl) BRB I 是 1\" > 3000 000 120 Las 3210.11 te ai : 和 132 Z ia 126 | 东北秋季攻势 1947年东北我军夏季攻劳结束后 HH, KS 、9 两纵奋勇追击，将其全部歼灭 。敌 此时，独集于新开原之敌53军暂30师和 52 军 蒋介石为挽救其在东北战场上的颓势，派参谋总长 打通锦承路的计划遂告失败 。我之秋季攻势第一阶 195 师等7 个团比较孤立，于是...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_060_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-liaoshen-1948_scan_060_medium.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_060_raw.txt",
    "riskTags": "needs-human-check",
    "reason": "combined_context_terms",
    "detectedPageNumber": "189"
  },
  {
    "battleId": "battle-liaoshen-1948",
    "battleName": "辽沈战役",
    "sequence": "070",
    "confidence": "medium",
    "pageTypeCandidate": "待人工判断",
    "matchedTerms": [
      "锦州",
      "长春",
      "沈阳/东北",
      "锦州"
    ],
    "titleCandidates": [
      "晋中战役",
      "东北冬季攻势作战",
      "原为中心的防御地带 。因军粮匮乏 ，敌企图在麦收",
      "以便在遭到我军攻击时， 可以",
      "共46个团 6 万余人发起晋中战役",
      "战役 HEAL"
    ],
    "ocrExcerpt": "晋中战役 临汾解放 ，阁锡山以其全部兵力 3 东北冬季攻势作战 上日，我军发起总攻, 至16日 ，敌野战司今部及33 1947 年东北秋季攻势后，薪 个集团军辖 5 个军14个师 、 34军和10总队全部被歼 介石因穷于应付关内紧张局势，已无力再向东北作 集于北起忻县，南至灵石，东起榆次 ，西至孝义 在此期间，间锡山曾调集太原守敌组成南援兵 Jt 故东北之敌只得就地扩编部队 ，新编组 汾阳的狭小地区，并以纵贯其间的同泗路组成以太 了3个军，并继续收缩兵力 以正规军13个军固守 团，进至栓次西南怀仁地区 ，接应被 围之敌，当 原为中心的防御地带 。因军粮匮乏 ，敌企图在麦收 其突围无望, 即迅速北撤 。 aie 于沈阳 、锦州 四平、...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_070_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-liaoshen-1948_scan_070_medium.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_070_raw.txt",
    "riskTags": "needs-human-check",
    "reason": "combined_context_terms",
    "detectedPageNumber": "199"
  },
  {
    "battleId": "battle-liaoshen-1948",
    "battleName": "辽沈战役",
    "sequence": "071",
    "confidence": "medium",
    "pageTypeCandidate": "待人工判断",
    "matchedTerms": [
      "锦州",
      "长春",
      "沈阳/东北",
      "锦州"
    ],
    "titleCandidates": [
      "然后准备会同主力作战",
      "击沈阳援敌; 为配合主要方向的作战 ，其它各部也",
      "歼敌26 师 。至此 ，战役第一"
    ],
    "ocrExcerpt": "然后准备会同主力作战 日地区 可能抽调的15个师 ,向沈阳西北出击 企图 errr 师乘胜南下， 直指营 口。在我军事 我军这一突然行动 ，迪敌急令新6 军新22师由 乘除击破该区我军， 解除法库之转 1948年 1月1 压力和政治争取下 ， 营口守敌58师起义 。至此， 我 铁岭西出, 以解法库之围 。为 歼灭该敌于运动之中 军完全扫清了中长路南段各据点,控制了营口海港 日，敌新3军、新6军为右翼,新5军为左翼,71 我决定缓攻法库 ，以各部迅速向敌新22师前进 。并 军、新1军居中，自铁岭 沈阳至新民一线百 其间 ，孤立于法库的暂62师于 2 AIT RRA 以3 纵切断该敌退路 12月16日新22师进至铁岭以 FT RUB 。...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_071_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-liaoshen-1948_scan_071_medium.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_071_raw.txt",
    "riskTags": "needs-human-check",
    "reason": "combined_context_terms",
    "detectedPageNumber": "200"
  },
  {
    "battleId": "battle-menglianggu-1947",
    "battleName": "孟良崮战役",
    "sequence": "039",
    "confidence": "strong",
    "pageTypeCandidate": "战役正文/总述页",
    "matchedTerms": [
      "孟良岗"
    ],
    "titleCandidates": [
      "泰蒙战役",
      "打破敌人的进攻,于4月20日拟定了泰蒙战役计划:",
      "战役是在敌大军",
      "芜战役后"
    ],
    "ocrExcerpt": "北援征侯 能调动敌军主力回援而予以歼灭 ， 但我之主动后撤 辣卫 oe ? 寻找战机 。 (atin alee 1 Fa BEA AE SATA 强攻泰安 激战两日，全歼奏 a MER TRA 长了敌之骄狂心理，使其产生错 便于分 又与第 第 3兵团相距较远的情况， 敌72师K | |* AK) ax HH SHR ae A ak ee pb WR, 终于在孟良岗投我以可乘 人 求歼敌第工兵团大部 wi, # Hes 泰安 ,被我3 、 LOADS 一部击溃 ii 、郑城地区 。 3 月底 4月初我军向南开进， the 军主力继续向我新素 KAI. HK ea 敌工兵团迅速向临沂地区收 sade a +z , L1 3 6 纵队沿津...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_039_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-menglianggu-1947_scan_039_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_039_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "168"
  },
  {
    "battleId": "battle-menglianggu-1947",
    "battleName": "孟良崮战役",
    "sequence": "040",
    "confidence": "strong",
    "pageTypeCandidate": "地图/态势图页",
    "matchedTerms": [
      "孟良岗"
    ],
    "titleCandidates": [
      "孟民转战役要图",
      "线进犯 。其作战计划是 :",
      "沂水，策应整编74师作战 。12日，敌左收整编25",
      "重民岗战役是华东我军在粉碎国民党军对山东",
      "这一战役一举歼敌整编74 师全部和整编83",
      "出击，有力地保证了主力围歼整编74师的作战 。"
    ],
    "ocrExcerpt": "改变部署，以一部担任正面掩护， 备恨几、芒山等几个山头上 。这时，敌增援部队在 HEA SHER BL REE ae 蒋介石的严令督促下 83师配合下，自摊庄东西地区 west , AER 我第 4 第 疯狂进攻，企图打通与整编 点 沂水至 阴公路 ; 另以第7 军及整编和8师北犯 9 纵队乘敌收缩之时，发起攻击 。其他各纵队亦向 74师的联系，有的已进至距孟良岗10余公里处 ，但 沂水，策应整编74师作战 。12日，敌左收整编25 | 敌压缩 。经公夜激战，连续猛攻，至15日晨，我第 在我阻援部队的坚强阻击下，终未能与整编74师合 1 个旅进占黄斗顶山 ; 其右翼整编83师一部进占隋 6 纵队在第 工纵队一部协同下攻占了操庄，第8...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_040_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-menglianggu-1947_scan_040_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_040_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "169"
  },
  {
    "battleId": "battle-menglianggu-1947",
    "battleName": "孟良崮战役",
    "sequence": "015",
    "confidence": "medium",
    "pageTypeCandidate": "地图/态势图页",
    "matchedTerms": [
      "整编74师",
      "华东"
    ],
    "titleCandidates": [
      "其侧背安全 ，敌被迫退回原地。为求新的机动作战，我军主力于9 月",
      "12日遵令北上，苏中战役至此结束。",
      "苏中战役，我军歼敌 6 个旅、5个交警大队，共5 万余人，严重",
      "ESA, 鼓舞与坚定了我军的胜利信心 ，并为尔后我军作战取得了重",
      "会时散发的国民党军进攻苏皖解放区要图 。"
    ],
    "ocrExcerpt": "分别包围 。随后,我采取先弱后强各个击破的战法，集中4至5倍于 华东战场国民党军战斗序列暨主官姓名表 敌之兵力，全歼被围之敌，乘胜攻占黄桥 ，守敌160 旅5 个连于31 日 ( 1946年9月) 向我投降 。与此同时，我7 纵先后攻克大白米、曲塘等地。 由扬州 分三路向姥伯 、丁沟、乔枝进攻之敌, 遭到我军顽强阻击。 (新7、 第145、第146旅) 26日，其最后一次攻势被我打退。时值我在如黄路上获胜，严重威肪 一 整编21 师 师长 i Fy Hel 其侧背安全 ，敌被迫退回原地。为求新的机动作战，我军主力于9 月 整编25师 师长 (第40、第108、第148旅) ae 12日遵令北上，苏中战役至此结束。 三绥 4 整编49...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_015_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-menglianggu-1947_scan_015_medium.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_015_raw.txt",
    "riskTags": "needs-human-check",
    "reason": "combined_context_terms",
    "detectedPageNumber": "1"
  },
  {
    "battleId": "battle-menglianggu-1947",
    "battleName": "孟良崮战役",
    "sequence": "033",
    "confidence": "medium",
    "pageTypeCandidate": "待人工判断",
    "matchedTerms": [
      "整编74师",
      "华东/整编74师",
      "沂蒙"
    ],
    "titleCandidates": [
      "妄图首先解决山东和陕北问题，然后集中兵力",
      "配合行动 ，企图摧毁我军后方 。我军鉴于敌正",
      "蠕龙三次战役的胜利，使敌人靶于奔命，却始",
      "以上行动 ，不仅配合了山东和西北我军作战 ，",
      "下旬至7月上旬，沧行了陇东、三边战役，再",
      "转向东北，连续举行了榆林 、沙家店战役，终"
    ],
    "ocrExcerpt": "阶层人民的反对，使它在政治上更加和孤立，经 的指示，将主力后撤莱芜、新泰、蒙阴以东地 区待机 。5 月中旬，终于在蒙阴东南之孟良出 济上日趋困难 。 \\\\ 蒋介石为挽救其在政治上和军事上的颓势， 抓位了骄狂不可一世而态势略为突出孤立的敌 一方面加紧镇压爱国民主运动，下令驱逐我党 整编74师，一举将其歼灭，引起了敌人内部极 \\ AA =, rs 大的震动，使其不得不暂时停止进攻 。6 月下 驻南京、上海、重庆等地的谈判代表，关闭了 可 和谈大门 ;另一方面决定将全面进攻改为对解 旬，敌人经过40余天整顿，再次向我沂蒙山区 a ‘a 4 KERR AE, A ROR AL CB HK”, 发起进攻，并以青岛、滩县、济南之敌各一部 oA...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_033_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-menglianggu-1947_scan_033_medium.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_033_raw.txt",
    "riskTags": "needs-human-check|overview-page-risk",
    "reason": "combined_context_terms",
    "detectedPageNumber": "162"
  },
  {
    "battleId": "battle-menglianggu-1947",
    "battleName": "孟良崮战役",
    "sequence": "041",
    "confidence": "medium",
    "pageTypeCandidate": "待人工判断",
    "matchedTerms": [
      "整编74师",
      "华东"
    ],
    "titleCandidates": [],
    "ocrExcerpt": "= ee 72支 Cs A 2 Hf ae mR 沂水 7317] 486门 521] ‘3 BA aA ——————— —_—— 108!\"] 16门 SA = —— = ri TH 2 门 家曲 — cae 81] ris} —= = — 36!) ge / 523 二 E 765个 ale 108 4 BX ——- 175 7% 注: 我军一个纵队系华东野战军第 9 纵队1948年工月统计数，敌军一个整编师系 整编74师1947年 5 月统计数 。 缴获敌人的武器，用以装备自己，在相当长的时 期内，是人民解放军装备的主要来源。 \\f Mt “a a sa) ~ Cd = ate wes ‘2 A> a arf saad 全 N...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_041_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-menglianggu-1947_scan_041_medium.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_041_raw.txt",
    "riskTags": "needs-human-check",
    "reason": "combined_context_terms",
    "detectedPageNumber": "170"
  },
  {
    "battleId": "battle-pingjin-1948",
    "battleName": "平津战役",
    "sequence": "043",
    "confidence": "strong",
    "pageTypeCandidate": "地图/态势图页",
    "matchedTerms": [
      "平津"
    ],
    "titleCandidates": [
      "正太战役要图",
      "正太战役",
      "经过八个月作战 ,华北敌军损失重大，",
      "完成正太战役，使敌完全陷入被动",
      "政策，亦即完全主动作战政策 。遵照这一指示，晋",
      "全主动作战的指示精神，决心于1947年 4月发起正"
    ],
    "ocrExcerpt": "日至22日 ,我军先后攻克获鹿、井 组铁路及察南地区 ; 13军驻守于平承线 ; 第 3 军驻 守石家庄 ; 太原绥署 5个军防守太原地区 ，其33军 了茎 、娘子关，打开了我军西进的大门 ; RB. 人民解放军战士研制的炸药发射简， 构造简单 ， 之暂编38师驻守大同 。敌之企图为控制已占交通点 乱流等据点，直逼平定、阳泉城下 。我第 2 纵队取 线，确保平津战略基地，保持与东北联系的走廊 ， 道洪子店，迅速扫清阳泉以北白泉、巨城、上下荫 威力较大，每次可发射炸药10公斤左右，杀伤半径为 15米 ， 可代替人力投放炸药包 ° 并仍图集中一部兵力向我华北解放区腹地发动局部 营等大小点奋40余处，打破了敌在阳泉以北地区的 进攻 。 防...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_043_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-pingjin-1948_scan_043_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_043_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "172"
  },
  {
    "battleId": "battle-pingjin-1948",
    "battleName": "平津战役",
    "sequence": "068",
    "confidence": "strong",
    "pageTypeCandidate": "待人工判断",
    "matchedTerms": [
      "平津"
    ],
    "titleCandidates": [
      "察绥战役",
      "1纵进逼天镇 ，6纵1工个旅为攻击之 2 梯队",
      "别集结于北平、涿县和大清河北地区 ，企图于平",
      "右屠兵团于21日拂晓开始全线攻击 ，4 纵10旅",
      "灭天镇地区之敌，8 日右兵团开始攻击 。敌发觉我",
      "军意图后，即回师柴沟堡 。 我"
    ],
    "ocrExcerpt": "察绥战役 1947年冬， 国民党军为统一其华北战 HED 。为扩张战果，截断天镇至此沟堡交通 ， 我左兵团西进的行动，使传作义极为惊慌 ,为 场的指挥，成立了以傅作义为总司令的华北 \"蔓 22日 1纵进逼天镇 ，6纵1工个旅为攻击之 2 梯队 了挽救归绥危局 调其主力西援 。至5 日，35军 总司令部，总揽华北军政大权 。传作义为扭转不利 主力进至怀安以西打击张家口方向可能增援之敌 2个师进至卓资山，暂26 师进至集宁，新骑 4 师和 瑟局，将其主力35军 暂 3 军、94军、16军等部分 3 月24日，我 1 纵占领天镇 ，全歼守敌补训5 | 整骑 5 旅达丰镇、集宁一线，暂4 军率 210 师和和暂 别集结于北平、涿县和大清河北...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_068_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-pingjin-1948_scan_068_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_068_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "197"
  },
  {
    "battleId": "battle-pingjin-1948",
    "battleName": "平津战役",
    "sequence": "073",
    "confidence": "strong",
    "pageTypeCandidate": "地图/态势图页",
    "matchedTerms": [
      "平津战役/平津"
    ],
    "titleCandidates": [
      "中共中央\\人民解放军总部转战华北路线图",
      "两年作战,共歼敌264万余人，不但打退了国民党的军事进攻 ，",
      "市，同敌人的强大机动兵团作战，打前所未有的大歼灭战，分",
      "余人; 9 、10月间华北我军第 2 、3 兵团发动了察南绥东战役 ，",
      "我军发动了济南战役，全歼守敌10万余人 (包括起义2万人)，",
      "了人民解放战争中具有决定意义的三个战略性战役一一辽沈战"
    ],
    "ocrExcerpt": "经济危机进一步加深 。整个国 以毛泽东为首的中共中央、中央军委审时度势，当机立断， 民党营全中，充满着严重的失败情绪 。 以雄伟的革命胆略和卓越的军事艺术，及时而连续地组织指挥 国民党为挽救其日益危殉的反动统治，除在政治 经济上 了人民解放战争中具有决定意义的三个战略性战役一一辽沈战 更加依靠美沉国主义，更加残酷地镇压人民民主运动和搜刮剥 役 、淮海战役 和平津战役 ,总称三大战役 。 a 夺人民和群众外，在军事上于1948年 8 月决定由“分区防御”改 辽沈战役于1948年 9月12日至11月 2 日间进行 , 共歼敌47 为“重点防御”，企图收缩战线，集中兵力，依托战略要点， 万人，解放了东北全境，使解放战争获得了战略上巩固的和...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_073_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-pingjin-1948_scan_073_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_073_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "202"
  },
  {
    "battleId": "battle-pingjin-1948",
    "battleName": "平津战役",
    "sequence": "078",
    "confidence": "strong",
    "pageTypeCandidate": "地图/态势图页",
    "matchedTerms": [
      "平津战役/平津"
    ],
    "titleCandidates": [
      "锦州战役要图",
      "战役第一阶段结束 。",
      "HE HB TEAR 。战役第二阶段胜利结束 。",
      "至此，历时50多天的辽沈战役，以我军取得歼",
      "一战役，使我军获得了进行大规模歼灭战的经验和",
      "略预备队 。这对尔后平津战役的胜利，加速全国解"
    ],
    "ocrExcerpt": "殷 我军突入沈阳市区 ，11月 2日 ,全歼守敌， 解放沈 一战役，使我军获得了进行大规模歼灭战的经验和 进，以10纵在黑山、大虎山地区阻敌前进;六第 5、 阳 。同日，重新解放营口，歼敌 1万多人 敌52军 巩固的战略后方，使东北野战军成为一支强大的战 6纵分别由阜新、朝武地区南下，切断庆兵团撤铅 军部及1个师部 、3个团乘船南逃 。 略预备队 。这对尔后平津战役的胜利，加速全国解 沈阳的退路，以独 2师向营口方向前进，切断敌人 11月 9日，锦、戎之敌全部由海上撤回天津 、 放战争的进程，都具有重大的战略意义 。 海上退路，力求歼灭鹿耀湘兵团于运动中。另以4、 2O7",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_078_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-pingjin-1948_scan_078_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_078_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "9"
  },
  {
    "battleId": "battle-pingjin-1948",
    "battleName": "平津战役",
    "sequence": "082",
    "confidence": "strong",
    "pageTypeCandidate": "待人工判断",
    "matchedTerms": [
      "平津战役/平津"
    ],
    "titleCandidates": [
      "综苏独立旅发起了津浦铁路徐蚌段作战 PR 4 纵",
      "加阻击李延年兵团作战外，集中6 SAK . Rie",
      "攻集团围歼黄百才兵团之作战 。激战至20日拂晓 ，",
      "定局 。但为配合平津战役的发起，我军遵照中央军",
      "淮海战役中国民党军第 12 兵团构筑的汽车防线 ，",
      "SH BUE 。伟大的淮海战役胜利结束 。我军乘胜追"
    ],
    "ocrExcerpt": "ER HER 3 个兵团，放弃徐 第三阶段 : 全歼杜幸明集团。黄维兵团被歼后; 我主攻集团歼敌44军 、100军等部,接着又对第25 州，绕道萧县、永城南下，以解黄维兵团之围 。我 SEERA BHH, LEHRER RPSL K 军 、64军发起突击 ; 至22日黄昏 ，全歼黄兵团，黄 军对徐州守敌弃城逃跑早有准备 。11月30日当敌奔 定局 。但为配合平津战役的发起，我军遵照中央军 BM ARF, HRNARZS 印清泉、李弥兵团在 城而逃时，我除以一部占领徐州外，当即以11个纵 委毛主席指示，暂时停止对杜幸明集团的攻击，进 我顽强阻击和侧击下，10天前进不足20里，眼看黄 队的强大兵力，分数路追击、拦截和迁表，终于12 行了...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_082_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-pingjin-1948_scan_082_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_082_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "211"
  },
  {
    "battleId": "battle-pingjin-1948",
    "battleName": "平津战役",
    "sequence": "084",
    "confidence": "strong",
    "pageTypeCandidate": "地图/态势图页",
    "matchedTerms": [
      "平津战役/平津"
    ],
    "titleCandidates": [
      "am 敌我态势图",
      "平津战役是战略决战中具有决定意义",
      "的第三个大战役，是东北野战军、华北军区两个野",
      "一次战略性战役",
      "1948年11月初，辽沈战役结束后，华北之敌已",
      "为加强平津战役的集中统一"
    ],
    "ocrExcerpt": "FR 35 F YY (ee a 46 /到 烟台 im aN Date, 1948 4 Masia’ 1k 纵队 万余人全人 Ay Be se eB 华 北 a ‘ ie 华北8纵队 | | 临汾 'g oy 人 阳原 FISH Ax 7 40# 2个师 ik. orm Oe, ——_ 7 35 — OLEG ea | (> —, FIZ sa 津战役 平津战役是战略决战中具有决定意义 同时指示中原 、华东我军，留下杜 3.4.84 的第三个大战役，是东北野战军、华北军区两个野 JAY 华北2兵 幸明集团，暂不作最后歼灭之部署 战兵团和地方武装一部，在平、津、张地区进行的 免使蒋介石迅速决策海运平津诸敌 二本 5.4. 一次战略性...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_084_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-pingjin-1948_scan_084_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_084_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "213"
  },
  {
    "battleId": "battle-pingjin-1948",
    "battleName": "平津战役",
    "sequence": "085",
    "confidence": "strong",
    "pageTypeCandidate": "待人工判断",
    "matchedTerms": [
      "平津战役/平津/天津战役"
    ],
    "titleCandidates": [
      "天津战役历时60余日，共歼灭和改编国民党军",
      "人仓必由海上逃走 。17日我军解放塘沽 。战役第二",
      "全国解放战争的胜利具有重要意义。在平津战役中，"
    ],
    "ocrExcerpt": "月14日-15日 多 fe 容城”|信雄县. t Fes Ui; SB if otk A V = pis E12 4M pa 你 SA BAB 3.4 Mi) of LE 大城 vis) 费中日分区计 © wuell a= ga ria @河间 bs 116 117 军将攻击目标指向天津 。敌天津警备司令陈长捷不 此 。在这种情况下，1月21日，传作义与我平津前 听我方劝告，拒绝放下武器，企图赁坚顽抗 1949 线司令部达成协议，宣布接受我军和平改编 。1 月 rg 8 22日傅作义所部8个军.25个师开始出城听修改编， 年1月14日，我军集中5个纵队 (1 2 9纵队) 22个师，并附炮兵、工兵、坦克部队，采 至1月31日，全部开...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_085_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-pingjin-1948_scan_085_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_085_raw.txt",
    "riskTags": "broad-context-page",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "214"
  },
  {
    "battleId": "battle-pingjin-1948",
    "battleName": "平津战役",
    "sequence": "086",
    "confidence": "strong",
    "pageTypeCandidate": "地图/态势图页",
    "matchedTerms": [
      "天津战役"
    ],
    "titleCandidates": [
      "天津战役要图",
      "我军外围作战进攻方向",
      "一 我军突破作战进攻方向",
      "= 我军纵深作战进攻方向"
    ],
    "ocrExcerpt": "天津战役要图 欢坨 x =a 1949 #1A38-15 A 如 Be eA =a 东北野司 警卫团 毕庄 WAT AG Bs W474 A PA 独7 4540 Be w REAL : A 独4 师主力 4师 a ra 东北8纵队 <3 ZA, 津 Pi ELH ALI 东北2纵队 4师 meee SL 十下 om 22 师 RD 铁路宿 a “ra = 辽宁独立师 BE Fi se 862 ss 93师 a 9师 东北7纵队 5师 张家坟地 [se RE #10 Oi 东北1纵队 = 21 师(欠1个团) i” Pe 184% 305 Sif > | > 284师 于四南开大 德国楼 sei 东 马场 RR a at EEF 1...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_086_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-pingjin-1948_scan_086_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_086_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "215"
  },
  {
    "battleId": "battle-pingjin-1948",
    "battleName": "平津战役",
    "sequence": "087",
    "confidence": "strong",
    "pageTypeCandidate": "战斗序列/统计页",
    "matchedTerms": [
      "平津战役/平津"
    ],
    "titleCandidates": [
      "平津战役人民支援前线统计",
      "平津战役中,河北杨村民工破冰队在大清河上破冰 三百余里 ，运送支前物资 。",
      "图为他们当时使用的破冰工具 一一 AS, FFE 。",
      "平津战役我军战斗序列表",
      "平津战役国民党军战斗序列表",
      "注 : 战役过程中,敌军除新建 5个师外,还重建了3个军部(16.35.104军)"
    ],
    "ocrExcerpt": "平津战役人民支援前线统计 See & Eg CE sie TEA ise '2aay lo rt al 民工 154 万人 担架 20 000副 小车 20000辆“大车380 000 辆 #1000000% #3100071 Pr —— agit a= a aati Sit 平津战役中,河北杨村民工破冰队在大清河上破冰 三百余里 ，运送支前物资 。 图为他们当时使用的破冰工具 一一 AS, FFE 。 uu ee 四 1 = 77 平津战役我军战斗序列表 一一5 ‘eae aypnithiss La (19484 12A) 上 Vay : ay be bk Ee 一第1纵队 第1、第2 、第3师,独立10 师 ae ve t a...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_087_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-pingjin-1948_scan_087_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_087_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "216"
  },
  {
    "battleId": "battle-pingjin-1948",
    "battleName": "平津战役",
    "sequence": "091",
    "confidence": "strong",
    "pageTypeCandidate": "待人工判断",
    "matchedTerms": [
      "平津战役/平津"
    ],
    "titleCandidates": [
      "绥东战役",
      "察绥战役后,我军已在华北北",
      "呆贺图 。26日 ,我 8 纵主力和1 纵2",
      "定) 北战役 ， mena, 使",
      "这时，东北我军正准备发起辽沈战役 。中央军",
      "配合东北我军作战"
    ],
    "ocrExcerpt": "AA, 为协同东北我军共同进 | 四 第 BRR , TRAE IR, RH 绥东战役就此 一 十 四 VAN 结束 _ & 兵 五 ZN 察南 、绥东战役共歼敌2.1 万人，收复县城15 一 一< 一< 一< 座 钳制 北敌军4个军于平缓线，有力地配合了 第第副参副政 司政第第政政 司政第第副 司政第第政 司政副副政 司副参政 东北我军的作战 ，并为 尔后平津战役的发起，解放 = — — I — 豆| 4A Bed, Hie TAA 条件 BA 一副治治 司 六 i= i ~ sa 4A a AN VB 司 副副 副 心 部 副副兼 NS. 司 副 cid a ix BB 司司 Bik 部 aR BB J 司 司 员 司 B 参...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_091_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-pingjin-1948_scan_091_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_091_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "220"
  },
  {
    "battleId": "battle-pingjin-1948",
    "battleName": "平津战役",
    "sequence": "092",
    "confidence": "strong",
    "pageTypeCandidate": "战役正文/总述页",
    "matchedTerms": [
      "平津"
    ],
    "titleCandidates": [
      "海、平津三大战役后，国民党军主力已被消灭，其",
      "作战部队只剩下 100余万人，分布在新疆到台湾的"
    ],
    "ocrExcerpt": "<a — 一一一 {im ae i 3} A) ——— — i KERR oaae 敌军阻击阵地 民 ray UN. (Hy S— 1 ee S= 二 = = — iL (LEE —— == = So Se 100 中国人民解放军战略进攻形势 (=) 辽沈、淮 国民党内部更加四分五裂，众叛亲离 。形势非常明 我党进行和平谈判，企图在和平的烟幕下，争取时 海、平津三大战役后，国民党军主力已被消灭，其 显 ，只要我军再作若干重大攻击，摇摇欲聆的国民 间，重整军备，依托长江天思，阻止我军南下，以 作战部队只剩下 100余万人，分布在新疆到台湾的 党反动统治即会崩溃 ，人民革命即可在全国取得胜 苟延残喘，形成“南北朝”局面，尔后待机卷土重...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_092_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-pingjin-1948_scan_092_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_092_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "221"
  },
  {
    "battleId": "battle-pingjin-1948",
    "battleName": "平津战役",
    "sequence": "099",
    "confidence": "strong",
    "pageTypeCandidate": "地图/态势图页",
    "matchedTerms": [
      "平津战役/平津"
    ],
    "titleCandidates": [
      "为了配合平津战役的发",
      "大原战役要图(二)",
      "平津战役后， 我第",
      "太原战役前后经过两个阶段 6 个月19天的作战，"
    ],
    "ocrExcerpt": "夜的激烈战斗，终于夺 取了四大要点 。此时， 为了配合平津战役的发 大原战役要图(二) fey 1949年4月20 日一24日 起，遵照中央军委缓攻 青龙镇 太原的指示，我军转入 682 20 Ss 2?侯村 对敌围困和广泛的政治 -EBRo Prverr SN KH. RAL — PR LEE DRE 告结束。 ] 平津战役后， 我第 阳店 BA dh 662 19 、20兵团及第4 野战 us #Z fal lif, 719494 SS SSS =e 张村 SS 71师 3 月底，迅速进至太原 NAN ek 前线，连同18兵团 (统 RFRA BR 一整编后, 华北工兵团 呼延村> mF \\ 2 ~ yp lacs / & 后院...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_099_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-pingjin-1948_scan_099_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_099_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "2"
  },
  {
    "battleId": "battle-pingjin-1948",
    "battleName": "平津战役",
    "sequence": "026",
    "confidence": "medium",
    "pageTypeCandidate": "地图/态势图页",
    "matchedTerms": [
      "北平",
      "天津",
      "张家口"
    ],
    "titleCandidates": [
      "晋北战役要图",
      "同 ，以便于尔后作战 ，晋组军区奉命以所属独立第 2 旅 、独立第",
      "4旅 ,在晋察纳军区第11旅和地方武装的配合下，发起晋北战役",
      "张家口战役",
      "北战役前委确定以全部兵力攻击忻县城，并",
      "94军于北平 、天津问为战役预备队 ; 以第13军由承"
    ],
    "ocrExcerpt": "y 一-一一 敌军战区分界线 繁峙，全歼守敌 。6 日，代县守敌逃往贬县 ，8 日我11旅进至贬 a a 1:1500 000 | 县以北之香烟村地区与晋绥2 MS) ESAS RE AM ( 7 榆次RE 114 月1 日成立于宁武) 的统一指挥下，晋组2旅等部 112 113 于11日向贬县发起攻击 ，12日占领该城 。此时五台 置绥军区 、晋绥野战军 张家口战役 定训之敌惧歼，退守怕县，途中被我费 2 分区部 全面内战爆发后,在晋察费战场上 队歼其一部 。随后，我军向原平前进 ，歼原平守敌 战斗序列暨主官姓名表 国民党军为集中主力打通平绥线 攻占张家口，进 一部，余敌逃往忻口，后又光往忻县,我遂准备对 (1946年6月) 而控...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_026_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-pingjin-1948_scan_026_medium.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_026_raw.txt",
    "riskTags": "needs-human-check",
    "reason": "combined_context_terms",
    "detectedPageNumber": "155"
  },
  {
    "battleId": "battle-pingjin-1948",
    "battleName": "平津战役",
    "sequence": "027",
    "confidence": "medium",
    "pageTypeCandidate": "待人工判断",
    "matchedTerms": [
      "北平",
      "天津",
      "张家口"
    ],
    "titleCandidates": [
      "我军以预定之作战方案,采取机动防御",
      "令部统一指挥平级东线之作战",
      "托既设阵地担任怀来正面防御 ; 以第1 纵队和第4",
      "路向其两侧出击，将战术胜利扩大为战役胜利",
      "并于13日主动撤出怀来阵地 。保卫张家口战役至此",
      "在此期间， 我担任平汉线作战"
    ],
    "ocrExcerpt": "节抗击 勺堡地区，一面休整 一面积极备战 我军以预定之作战方案,采取机动防御 作为怀来方向之机动部队 以加强东线力量 中共中央曾电示晋察碍军区 : 如可能粉碎敌对 10月 2 日沿平缓线进犯之敌，占榆林堡东西花园地 然而正当我军调整部署之际 ，传作义乘我西北 张家口的进攻则 粉碎 如在不利条件下也可以主 10月 3 日 , 敌16军主力向我怀来以东阵地发起 线空虚 ,集中其主力101 师 、 ¥30i8 F170. 动撤出 。 遵照这 指示，晋察费军区组成了前线司 全线猛攻，突入我阵地一角 。入夜，敌109 师集结 4 师及骑1L旅等部 ， 绕过我军在上业 沟堡 、 阳高地区 令部统一指挥平级东线之作战 以第 2 纵队主力依 于东西...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_027_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-pingjin-1948_scan_027_medium.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_027_raw.txt",
    "riskTags": "needs-human-check",
    "reason": "combined_context_terms",
    "detectedPageNumber": "156"
  },
  {
    "battleId": "battle-yangtze-crossing-1949",
    "battleName": "渡江战役",
    "sequence": "082",
    "confidence": "strong",
    "pageTypeCandidate": "待人工判断",
    "matchedTerms": [
      "渡江作战"
    ],
    "titleCandidates": [
      "综苏独立旅发起了津浦铁路徐蚌段作战 PR 4 纵",
      "加阻击李延年兵团作战外，集中6 SAK . Rie",
      "攻集团围歼黄百才兵团之作战 。激战至20日拂晓 ，",
      "定局 。但为配合平津战役的发起，我军遵照中央军",
      "淮海战役中国民党军第 12 兵团构筑的汽车防线 ，",
      "SH BUE 。伟大的淮海战役胜利结束 。我军乘胜追"
    ],
    "ocrExcerpt": "ak el fT RR, AMR 击，至1月24日，先后解放蚌埠 、合肥和江淮间广 应了围歼黄百帮兵团的行动 ，割裂了敌军各集团之 大地区 。 间的联系，为尔后各个歼敌莫定了基础 。 淮海战役历时65天，共歼敌55.5万余人 ，胜利 第二阶段 AKRHEA, CHESARA 。 地完成了歼敌主力于长江以北的光荣任务，解放了 长江以北的广大地区 ,为我军尔后渡江作战创造了 黄百胡兵团被歼后,蒋介石令黄维兵团、李下年 、 one x\" nae ne 刘汝明两兵团以及位于徐州的杜幸明集团，三路会 了 极为有利的条件 。淮海战役后，菏介石被迫于1949 攻宿县，打通津浦路徐蚌段，退守淮南 。 年1月21日宣布“引退”，国民党的反动统治，从...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_082_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-yangtze-crossing-1949_scan_082_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_082_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "211"
  },
  {
    "battleId": "battle-yangtze-crossing-1949",
    "battleName": "渡江战役",
    "sequence": "093",
    "confidence": "strong",
    "pageTypeCandidate": "待人工判断",
    "matchedTerms": [
      "渡江战役/渡江作战"
    ],
    "titleCandidates": [
      "第 2兵团继向新疆进军 。9 月25 、26日，国民",
      "第 2 野战军渡江战役之后，在浙闽路沿线",
      "南各省进军 。9 月初，野战军主力第3 、第5",
      "地进军中，也将先占城市，后占乡村 。这次全",
      "第 3 野战军渡江战役后，主力位于京、沪、",
      "下大的渡江战役，一举突破天思长江 。经一个"
    ],
    "ocrExcerpt": "各 第 2兵团继向新疆进军 。9 月25 、26日，国民 项方针政策 ，以及在全国胜利后党的总任务 ; 党新疆省政府主席包尔汉和新疆警备总司令陶 在军事方面，提出了解决国民党残存军队的三 峙岳通电起义 。10月20日，第 工兵团进驻迪化 种方式，即“天津方式” “北平方式”和 (今乌鲁木齐) 。 ss “组远方式”，而首先必须注意和准备用战斗 第 2 野战军渡江战役之后，在浙闽路沿线 去解决，提出了“人民解放军永远是一个战斗 集结待命，防止美帝国主义在东南沿海登陆 ， 队，又是一个工作队”的任务 。以七届二中全 进行武装干涉，青岛、福州解放后，奉命向西 会为转折，中国共产党的工作重点由乡村移到 南各省进军 。9 月初，野战军主力第3...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_093_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-yangtze-crossing-1949_scan_093_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_093_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "222"
  },
  {
    "battleId": "battle-yangtze-crossing-1949",
    "battleName": "渡江战役",
    "sequence": "095",
    "confidence": "strong",
    "pageTypeCandidate": "战役正文/总述页",
    "matchedTerms": [
      "渡江战役/渡江作战"
    ],
    "titleCandidates": [
      "渡江战役",
      "三大战役以后，人民解放军一面进行",
      "休整和统一整编，一面积极进行渡江作战和向全国",
      "进军的准备 。中央军委决定仍以淮海战役的总前委",
      "继续指挥渡江战役 。",
      "MAES, EL, 战役第一阶段结束 。"
    ],
    "ocrExcerpt": "渡江战役 三大战役以后，人民解放军一面进行 无锡等地 。切断了宁沪铁路。8 兵团一部占领南京。 NG \\ == 休整和统一整编，一面积极进行渡江作战和向全国 国民党军第 2 舰队在南京以东江面起义，另一部于 ] 进军的准备 。中央军委决定仍以淮海战役的总前委 镇江江面投降 。中突击集团一部占领芜湖，主力湾 继续指挥渡江战役 。 过青飞江，在湾泪地区 歼敌20军大部和99军一部 。 长江， 是中国的第一大江，自西向东横贯中国 西突击集团攻占了贵池、青阳和马当等地 ，歼灭国 ORB 江 中部，全长6300余公里，历来被视为难以逾越的天 民党军一部 。与此同时，第4 野战军12兵团和中原 ite e) 1 HASH ELAR AM, PR...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_095_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-yangtze-crossing-1949_scan_095_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_095_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "一"
  },
  {
    "battleId": "battle-yangtze-crossing-1949",
    "battleName": "渡江战役",
    "sequence": "096",
    "confidence": "strong",
    "pageTypeCandidate": "地图/态势图页",
    "matchedTerms": [
      "渡江战役"
    ],
    "titleCandidates": [
      "上海战役",
      "每战役要图",
      "及吴淞口海上通道 。敌企图凭借既设永备型工",
      "5月23昌27日作战要图",
      "海战役，首先肃清外围之敌，封闭吴淞口敌军",
      "军组成战役兵力 ，首先采取钳形攻势 ，分自浦"
    ],
    "ocrExcerpt": "兵团指挥 8 个 敌军第一阶段退却方向 军组成战役兵力 ，首先采取钳形攻势 ，分自浦 — 敌军第一阶段进攻方向 > 敌军第二阶段撤退方向 dl) 东浦西进逼吴淞口，切断敌人海上退路 ，防止 杭 州 湾 REG RAR A VE, HAZ: 由10兵团指挥26、28、 29 、33军及特种兵纵队一部首先以主力攻占吴 1 : 1 G00 C〇OO 攻 _ f® 渡江战役我军战斗序列表 (1949年4月) 总 前 4 四 战 战 战 Bimal rT ae 1 se de 第 第 第 四 BE 九 八 一< 一 一< 一< & 一< 一< 一 一< 团 团 团 团 团 团 团 团 ost iCO CS 第 第 第 第 第 第 十 十 于...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_096_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-yangtze-crossing-1949_scan_096_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_096_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "八"
  },
  {
    "battleId": "battle-yangtze-crossing-1949",
    "battleName": "渡江战役",
    "sequence": "102",
    "confidence": "strong",
    "pageTypeCandidate": "待人工判断",
    "matchedTerms": [
      "渡江战役"
    ],
    "titleCandidates": [
      "福州战役",
      "渡江战役胜利后",
      "21军一部先期攻占三都 、 罗源等地 ，对战役起了",
      "年8 月11日至23日,首先举行了福州战役 。",
      "福州战役，我共歼敌近4 万人 。尔后，我第10",
      "衡宝战役"
    ],
    "ocrExcerpt": "乐 o街面 大博 Ui C4 UV 尚二 se 从 9 96军一部 a 户: Ca 我军集结地域 东张o ae — 我军开进方向 他 水口 o洋头 Hi 一我军进攻方向 73车23 我军歼敌地区 = ae = Cu BERS o凤山 =) 敌军退却方向 ORE (QS 1: 1100 000K fii 莆田6 m ! fe 118 119 zit 福州战役 渡江战役胜利后 华东敌军防御体系 的第28军，压缩和聚歼被围之敌 。同时，我第7 兵 iy 业已土崩瓦解 。但南逃之敌仍图占领东南一隅，作 团奉命以第21军一部从闽东北向罗源进攻，配合作 最后挣扎 。其部署是 : 以 3 个军约 6 万人退路舟山 战。 VON RIE 3 age...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_102_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-yangtze-crossing-1949_scan_102_strong.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_102_raw.txt",
    "riskTags": "candidate-needs-review",
    "reason": "exact_or_near_battle_term",
    "detectedPageNumber": "231"
  },
  {
    "battleId": "battle-yangtze-crossing-1949",
    "battleName": "渡江战役",
    "sequence": "014",
    "confidence": "medium",
    "pageTypeCandidate": "待人工判断",
    "matchedTerms": [
      "江阴",
      "渡江"
    ],
    "titleCandidates": [
      "苏中战役",
      "夜，我1 师对李堡发起攻击，次日晨全歼敌新",
      "淮北三个方向发动进攻，企图首先侵占我苏综",
      "李堡战斗后, 敌被迫重新调整部署， 企图",
      "得作战经验,然后向蚌埠、浦口段出击的指示，",
      "苏中战役就是我军在苏中地区所进行的7 次攻"
    ],
    "ocrExcerpt": "西进，准备攻击泰州，直接 15日拂晓 ，全歼守敌56团 。我6 师4个团突入 首歼李堡地区之敌，尔后寻机逐步扩张攻势 。 策应邵伯方向作战 。25日，黄桥之敌在如振之 泰兴城内 ，歼敌57团大部 。我 7 纵攻但家庄未 战斗于8 月10日夜发起。这时，原驻海安之敌 敌187 旅和79旅 1 个团接应下向东开进，与我 下 。敌发现我主力在宣泰地区 ，即以65师渡江 新7 旅旅部率19团与驻李堡之敌105 旅一个团 军主力在分界 、加力地区遭遇。 我军当即将敌 站 NS 苏中战役 se NS 194 6年7月13日-一8月27日 中对 主力 永安o 0纵苏中二分区 RHC Na pts 2c DAR St \\ 7纵一部 人ae CORE...",
    "imagePath": "/Users/kongyujia/Desktop/zez_project/figure/02_解放战争/专家新增_人民解放战争时期图册_1945-1950/扫描页_原始JPG/liberation_war_atlas_1945-1950_page_014_original.jpg",
    "publicImageUrl": "/maps/liberation-war-atlas-1945-1950/battle-yangtze-crossing-1949_scan_014_medium.jpg",
    "rawTextPath": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/05_新增图册OCR/page_text_raw/atlas_page_014_raw.txt",
    "riskTags": "needs-human-check",
    "reason": "combined_context_terms",
    "detectedPageNumber": "143"
  }
];

export function getLiberationAtlasCandidatesByBattleId(battleId: string) {
  return liberationAtlasCandidates.filter((candidate) => candidate.battleId === battleId);
}
