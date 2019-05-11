'use strict';
// https://codeburst.io/html5-speech-recognition-api-670846a50e92 
const langs = [ 
  ['Afrikaans',       ['af-ZA']],
  ['አማርኛ',           ['am-ET']],
  ['Azərbaycanca',    ['az-AZ']],
  ['বাংলা',            ['bn-BD', 'বাংলাদেশ'],
                      ['bn-IN', 'ভারত']],
  ['Bahasa Indonesia',['id-ID']],
  ['Bahasa Melayu',   ['ms-MY']],
  ['Català',          ['ca-ES']],
  ['Čeština',         ['cs-CZ']],
  ['Dansk',           ['da-DK']],
  ['Deutsch',         ['de-DE']],
  ['English',         ['en-AU', 'Australia'],
                      ['en-CA', 'Canada'],
                      ['en-IN', 'India'],
                      ['en-KE', 'Kenya'],
                      ['en-TZ', 'Tanzania'],
                      ['en-GH', 'Ghana'],
                      ['en-NZ', 'New Zealand'],
                      ['en-NG', 'Nigeria'],
                      ['en-ZA', 'South Africa'],
                      ['en-PH', 'Philippines'],
                      ['en-GB', 'United Kingdom'],
                      ['en-US', 'United States']],
  ['Español',         ['es-AR', 'Argentina'],
                      ['es-BO', 'Bolivia'],
                      ['es-CL', 'Chile'],
                      ['es-CO', 'Colombia'],
                      ['es-CR', 'Costa Rica'],
                      ['es-EC', 'Ecuador'],
                      ['es-SV', 'El Salvador'],
                      ['es-ES', 'España'],
                      ['es-US', 'Estados Unidos'],
                      ['es-GT', 'Guatemala'],
                      ['es-HN', 'Honduras'],
                      ['es-MX', 'México'],
                      ['es-NI', 'Nicaragua'],
                      ['es-PA', 'Panamá'],
                      ['es-PY', 'Paraguay'],
                      ['es-PE', 'Perú'],
                      ['es-PR', 'Puerto Rico'],
                      ['es-DO', 'República Dominicana'],
                      ['es-UY', 'Uruguay'],
                      ['es-VE', 'Venezuela']],
  ['Euskara',         ['eu-ES']],
  ['Filipino',        ['fil-PH']],
  ['Français',        ['fr-FR']],
  ['Basa Jawa',       ['jv-ID']],
  ['Galego',          ['gl-ES']],
  ['ગુજરાતી',           ['gu-IN']],
  ['Hrvatski',        ['hr-HR']],
  ['IsiZulu',         ['zu-ZA']],
  ['Íslenska',        ['is-IS']],
  [
    'Italiano',        ['it-IT', 'Italia'], ['it-CH', 'Svizzera']
  ],
  ['ಕನ್ನಡ',             ['kn-IN']],
  ['ភាសាខ្មែរ',          ['km-KH']],
  ['Latviešu',        ['lv-LV']],
  ['Lietuvių',        ['lt-LT']],
  ['മലയാളം',          ['ml-IN']],
  ['मराठी',             ['mr-IN']],
  ['Magyar',          ['hu-HU']],
  ['ລາວ',              ['lo-LA']],
  ['Nederlands',      ['nl-NL']],
  ['नेपाली भाषा',        ['ne-NP']],
  ['Norsk bokmål',    ['nb-NO']],
  ['Polski',          ['pl-PL']],
  ['Português',       ['pt-BR', 'Brasil'],
                      ['pt-PT', 'Portugal']],
  ['Română',          ['ro-RO']],
  ['සිංහල',          ['si-LK']],
  ['Slovenščina',     ['sl-SI']],
  ['Basa Sunda',      ['su-ID']],
  ['Slovenčina',      ['sk-SK']],
  ['Suomi',           ['fi-FI']],
  ['Svenska',         ['sv-SE']],
  ['Kiswahili',       ['sw-TZ', 'Tanzania'],
                      ['sw-KE', 'Kenya']],
  ['ქართული',       ['ka-GE']],
  ['Հայերեն',          ['hy-AM']],
  ['தமிழ்',            ['ta-IN', 'இந்தியா'],
                      ['ta-SG', 'சிங்கப்பூர்'],
                      ['ta-LK', 'இலங்கை'],
                      ['ta-MY', 'மலேசியா']],
  ['తెలుగు',           ['te-IN']],
  ['Tiếng Việt',      ['vi-VN']],
  ['Türkçe',          ['tr-TR']],
  ['اُردُو',            ['ur-PK', 'پاکستان'],
                      ['ur-IN', 'بھارت']],
  ['Ελληνικά',         ['el-GR']],
  ['български',         ['bg-BG']],
  ['Pусский',          ['ru-RU']],
  ['Српски',           ['sr-RS']],
  ['Українська',        ['uk-UA']],
  ['한국어',            ['ko-KR']],
  ['中文',             ['cmn-Hans-CN', '普通话 (中国大陆)'],
                      ['cmn-Hans-HK', '普通话 (香港)'],
                      ['cmn-Hant-TW', '中文 (台灣)'],
                      ['yue-Hant-HK', '粵語 (香港)']],
  ['日本語',           ['ja-JP']],
  ['हिन्दी',             ['hi-IN']],
  ['ภาษาไทย',         ['th-TH']]
];


  navigator.mediaDevices.getUserMedia({ audio: true, video: false })
  .then(stream => {
    console.log(stream);
  })

  const select_language = document.getElementById('select_language');
  const select_dialect = document.getElementById('select_dialect');
  const dialect_wrapper = document.getElementsByClassName('dialect_wrapper')[0];
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
  let recognizing = false; // flag 
  let transcript = ''; // full transcript text
  const img = document.getElementsByClassName('mic')[0];
  let recognition = undefined;

  for (let i = 0; i < langs.length; i++) {
    select_language.options[i] = new Option(langs[i][0], i);
  }

  const handleSuccess = () => {
    recognition.onresult = (event) => {
      const last = event.results.length - 1;
      const text = event.results[last][0].transcript;//event.results.transcript;
      const paragraph = document.createElement('p');
      paragraph.className = `transcript ${event.timeStamp}`;
      transcript = `${transcript} ${text}`;
      paragraph.textContent = text;
      document.getElementById('transcript').appendChild(paragraph);
    }
    if(!recognizing) {
      recognition.start();
      recognizing = true;
    }
  } 

  const startContinuousRecognition = () => {
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    // recognition.interimResults = true;
    recognition.lang = select_dialect.value;
    console.log(recognition);
    handleSuccess();

  }

  const startRecognition = () => {
    startContinuousRecognition();

    recognition.onstart = () => {
      recognizing = true;
      img.src = './img/mic-animate.gif';
    }
  
    recognition.onerror = (event) => {
      if(event.error === 'no-speech') {
        img.src = './img/mic.gif'; 
      } 
  
      if(event.error === 'not-allowed') {
  
      }
    } 
    recognition.onstoped = (event) => {
      recognizing = false;
      recognition = undefined;
    }
  }

  const updateCountry = () => {
    for (var i = select_dialect.options.length - 1; i >= 0; i--) {
      select_dialect.remove(i);
    }
    var list = langs[select_language.selectedIndex];
    for (var i = 1; i < list.length; i++) {
      select_dialect.options.add(new Option(list[i][1], list[i][0]));
    }
    dialect_wrapper.style.visibility = list[1].length == 1 ? 'hidden' : 'visible';      

    if (recognizing && recognition) {
      recognition.stop();
      recognition = undefined;
      recognizing = false;
    }
    
    startRecognition()
  }
  select_language.selectedIndex = 10;
  updateCountry();
  select_dialect.selectedIndex = 11;

const showResult = () => {
  const result =  document.getElementById('result');
  result.textContent = transcript;
  const ps = document.getElementById('transcript');
  ps.innerHTML = null;
}

const saveToFile = () => {
  const data = transcript;
  const filename = 'recognition_result';
  const type = 'text';
  const file = new Blob([data], {type: type});
  if (window.navigator.msSaveOrOpenBlob) // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
  else { // Others
      const a = document.createElement("a"),
              url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);  
      }, 0); 
  }
}

