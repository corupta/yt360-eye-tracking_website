/* eslint quotes: 0 */
/* eslint quote-props: 0 */
/* eslint sort-keys: 0 */
/* eslint max-len: 0 */

const VIDEOS = [
  {"youtube_id":"-hngyrNKt3g","youtube_ts":315,"audio_type":"human_speech","scene_type":"outside_man-made"},
  {"youtube_id":"-j1NkyfHMPw","youtube_ts":574,"audio_type":"music","scene_type":"inside"},
  {"youtube_id":"-ZrvrKMC7Tc","youtube_ts":28,"audio_type":"human_speech","scene_type":"outside_natural"},
  {"youtube_id":"1T25AgTIF9w","youtube_ts":678,"audio_type":"vehicle","scene_type":"inside"},
  {"youtube_id":"5ESa5aMm6WE","youtube_ts":1,"audio_type":"music","scene_type":"outside_natural"},
  {"youtube_id":"5g8UsTKizbM","youtube_ts":1035,"audio_type":"human_speech","scene_type":"inside"},
  {"youtube_id":"9FK9qU7ccCY","youtube_ts":73,"audio_type":"vehicle","scene_type":"outside_natural"},
  {"youtube_id":"Aa2muAMdV5s","youtube_ts":156,"audio_type":"music","scene_type":"inside"},
  {"youtube_id":"acQdZD0eqnM","youtube_ts":309,"audio_type":"human_speech","scene_type":"inside"},
  {"youtube_id":"ALoRBvyLkp8","youtube_ts":620,"audio_type":"music","scene_type":"outside_natural"},
  {"youtube_id":"AnfsPA5FXh4","youtube_ts":1215,"audio_type":"vehicle","scene_type":"outside_man-made"},
  {"youtube_id":"bQpRuEkPGSI","youtube_ts":0,"audio_type":"human_speech","scene_type":"inside"},
  {"youtube_id":"c-tL8nt3Nak","youtube_ts":280,"audio_type":"human_speech","scene_type":"outside_natural"},
  {"youtube_id":"cj-I_MXgJeI","youtube_ts":802,"audio_type":"music","scene_type":"inside"},
  {"youtube_id":"DaQ4J5cGlEI","youtube_ts":797,"audio_type":"music","scene_type":"inside"},
  {"youtube_id":"DGtWuPemYc4","youtube_ts":57,"audio_type":"human_speech","scene_type":"outside_natural"},
  {"youtube_id":"dItIYHryukk","youtube_ts":690,"audio_type":"vehicle","scene_type":"outside_man-made"},
  {"youtube_id":"dOsOAoJqYnE","youtube_ts":48,"audio_type":"vehicle","scene_type":"inside"},
  {"youtube_id":"dQaNzwqCUAA","youtube_ts":281,"audio_type":"music","scene_type":"outside_man-made"},
  {"youtube_id":"DsIJYA0nqTU","youtube_ts":40,"audio_type":"music","scene_type":"outside_man-made"},
  {"youtube_id":"eFHttj7sy04","youtube_ts":235,"audio_type":"music","scene_type":"outside_natural"},
  {"youtube_id":"eM0ggaX5hUo","youtube_ts":466,"audio_type":"vehicle","scene_type":"outside_natural"},
  {"youtube_id":"fbeUTq-SBuQ","youtube_ts":67,"audio_type":"human_speech","scene_type":"outside_man-made"},
  {"youtube_id":"FFzIb50X9GY","youtube_ts":4,"audio_type":"vehicle","scene_type":"outside_natural"},
  {"youtube_id":"gaAphCuHAIQ","youtube_ts":1104,"audio_type":"human_speech","scene_type":"outside_natural"},
  {"youtube_id":"gFQmL3B6fiI","youtube_ts":963,"audio_type":"vehicle","scene_type":"inside"},
  {"youtube_id":"gpvtwE_S0BY","youtube_ts":117,"audio_type":"human_speech","scene_type":"outside_man-made"},
  {"youtube_id":"gsKdSEzNNZQ","youtube_ts":266,"audio_type":"vehicle","scene_type":"outside_natural"},
  {"youtube_id":"GVhSOeTOYag","youtube_ts":1170,"audio_type":"human_speech","scene_type":"outside_man-made"},
  {"youtube_id":"gzUVlpffsbE","youtube_ts":2648,"audio_type":"human_speech","scene_type":"inside"},
  {"youtube_id":"I-QTAYzAM6g","youtube_ts":41,"audio_type":"vehicle","scene_type":"outside_natural"},
  {"youtube_id":"iDy7xYWMu1k","youtube_ts":367,"audio_type":"music","scene_type":"outside_man-made"},
  {"youtube_id":"iLSWIOoxf7g","youtube_ts":438,"audio_type":"human_speech","scene_type":"outside_natural"},
  {"youtube_id":"iZmOCu1knJw","youtube_ts":370,"audio_type":"human_speech","scene_type":"inside"},
  {"youtube_id":"jQsgjkWy2k8","youtube_ts":186,"audio_type":"vehicle","scene_type":"inside"},
  {"youtube_id":"Jx8aWIt5oGM","youtube_ts":150,"audio_type":"music","scene_type":"inside"},
  {"youtube_id":"KJYHP1ahjQ4","youtube_ts":141,"audio_type":"music","scene_type":"outside_natural"},
  {"youtube_id":"KnIGD_0o_cw","youtube_ts":2304,"audio_type":"vehicle","scene_type":"outside_natural"},
  {"youtube_id":"kxxy-H2tiqk","youtube_ts":2095,"audio_type":"human_speech","scene_type":"outside_natural"},
  {"youtube_id":"Lc5xpQBDWyg","youtube_ts":69,"audio_type":"music","scene_type":"outside_man-made"},
  {"youtube_id":"lcSqM-j48NY","youtube_ts":61,"audio_type":"human_speech","scene_type":"outside_natural"},
  {"youtube_id":"lRcwn_Ex-R4","youtube_ts":593,"audio_type":"music","scene_type":"outside_natural"},
  {"youtube_id":"mGD6f4j15BA","youtube_ts":1215,"audio_type":"music","scene_type":"outside_man-made"},
  {"youtube_id":"MJtJz-qEP7A","youtube_ts":182,"audio_type":"music","scene_type":"inside"},
  {"youtube_id":"MrxooUavIMI","youtube_ts":25,"audio_type":"human_speech","scene_type":"outside_natural"},
  {"youtube_id":"nD98n405M44","youtube_ts":8,"audio_type":"vehicle","scene_type":"outside_man-made"},
  {"youtube_id":"neNVkg7E7ic","youtube_ts":394,"audio_type":"vehicle","scene_type":"inside"},
  {"youtube_id":"nuHsz1TfJEo","youtube_ts":75,"audio_type":"human_speech","scene_type":"outside_man-made"},
  {"youtube_id":"oc0IFUeM77c","youtube_ts":1641,"audio_type":"vehicle","scene_type":"outside_natural"},
  {"youtube_id":"oQ_ztOvKfZY","youtube_ts":2241,"audio_type":"vehicle","scene_type":"outside_man-made"},
  {"youtube_id":"pmIUiybPT8k","youtube_ts":164,"audio_type":"music","scene_type":"outside_natural"},
  {"youtube_id":"pVBTPHjNunw","youtube_ts":219,"audio_type":"vehicle","scene_type":"outside_man-made"},
  {"youtube_id":"pxf-4iLOUVA","youtube_ts":2234,"audio_type":"human_speech","scene_type":"outside_man-made"},
  {"youtube_id":"pyRnPVbCmII","youtube_ts":543,"audio_type":"human_speech","scene_type":"inside"},
  {"youtube_id":"Q3zc71lyaVU","youtube_ts":359,"audio_type":"vehicle","scene_type":"inside"},
  {"youtube_id":"Q9bauFuT6eE","youtube_ts":938,"audio_type":"music","scene_type":"outside_man-made"},
  {"youtube_id":"QaKEmoEfP1c","youtube_ts":167,"audio_type":"vehicle","scene_type":"outside_natural"},
  {"youtube_id":"rAOU2gl4kY8","youtube_ts":3,"audio_type":"music","scene_type":"inside"},
  {"youtube_id":"RGzcsBqIbPk","youtube_ts":969,"audio_type":"human_speech","scene_type":"inside"},
  {"youtube_id":"RI2eIMZdyX8","youtube_ts":1063,"audio_type":"human_speech","scene_type":"outside_man-made"},
  {"youtube_id":"slR85J2Ua28","youtube_ts":173,"audio_type":"vehicle","scene_type":"outside_man-made"},
  {"youtube_id":"sskPJSDwmjo","youtube_ts":222,"audio_type":"vehicle","scene_type":"outside_man-made"},
  {"youtube_id":"sskPJSDwmjo","youtube_ts":285,"audio_type":"vehicle","scene_type":"outside_man-made"},
  {"youtube_id":"T6BhIZ4jTLk","youtube_ts":360,"audio_type":"music","scene_type":"outside_natural"},
  {"youtube_id":"TLcg-0-Qtw4","youtube_ts":519,"audio_type":"music","scene_type":"outside_natural"},
  {"youtube_id":"tMIM5lkrV7I","youtube_ts":1163,"audio_type":"vehicle","scene_type":"outside_man-made"},
  {"youtube_id":"tRDnA1Eci7E","youtube_ts":288,"audio_type":"human_speech","scene_type":"outside_man-made"},
  {"youtube_id":"U0ePKcd838o","youtube_ts":105,"audio_type":"human_speech","scene_type":"inside"},
  {"youtube_id":"UgyKRGwMm7U","youtube_ts":72,"audio_type":"human_speech","scene_type":"outside_natural"},
  {"youtube_id":"UpFZ2YaKeqM","youtube_ts":84,"audio_type":"human_speech","scene_type":"inside"},
  {"youtube_id":"V3zp7XOGBhs","youtube_ts":117,"audio_type":"music","scene_type":"inside"},
  {"youtube_id":"vj_SY2GhjVM","youtube_ts":53,"audio_type":"vehicle","scene_type":"inside"},
  {"youtube_id":"vQ6JEA13a_s","youtube_ts":304,"audio_type":"music","scene_type":"outside_man-made"},
  {"youtube_id":"VU0lsLthLj8","youtube_ts":88,"audio_type":"vehicle","scene_type":"outside_natural"},
  {"youtube_id":"Wb_RGCFKpDw","youtube_ts":745,"audio_type":"human_speech","scene_type":"outside_man-made"},
  {"youtube_id":"wci2iDB0Hm0","youtube_ts":445,"audio_type":"vehicle","scene_type":"inside"},
  {"youtube_id":"WMZAENL9oFw","youtube_ts":683,"audio_type":"music","scene_type":"outside_man-made"},
  {"youtube_id":"xyccHcWoS74","youtube_ts":138,"audio_type":"music","scene_type":"outside_natural"},
  {"youtube_id":"XZY3nPnDCQw","youtube_ts":4951,"audio_type":"music","scene_type":"inside"},
  {"youtube_id":"Y8ujvRbuZUU","youtube_ts":112,"audio_type":"music","scene_type":"outside_man-made"},
  {"youtube_id":"YwJn5mTwbc0","youtube_ts":91,"audio_type":"vehicle","scene_type":"inside"},
];

const CONDITIONS = [
  {"eye_type":"Fixation","color_condition":"colored"},
  {"eye_type":"Fixation","color_condition":"grayscale"},
  {"eye_type":"Gaze","color_condition":"colored"},
  {"eye_type":"Gaze","color_condition":"grayscale"},
]

const data = {
  "videos": []
};

VIDEOS.forEach((video) => {
  CONDITIONS.forEach((condition) => {
    data.videos.push({
      ...video,
      ...condition,
    });
  });
});

export default data;
