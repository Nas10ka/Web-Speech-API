// 'use strict';
// https://codeburst.io/html5-speech-recognition-api-670846a50e92 
// const languages = require('./translation_langs');
const languages = [{
  "id": "af-ZA",
  "name": "Afrikaans"
}, {
  "id": "sq-AL",
  "name": "Albanian"
}, {
  "id": "am-AM",
  "name": "Amharic"
}, {
  "id": "aig-AG",
  "name": "Creole English (Antigua and Barbuda)"
}, {
  "id": "ar-SA",
  "name": "Arabic"
}, {
  "id": "hy-AM",
  "name": "Armenian"
}, {
  "id": "az-AZ",
  "name": "Azerbaijani"
}, {
  "id": "bah-BS",
  "name": "Creole English (Bahamas)"
}, {
  "id": "bjs-BB",
  "name": "Bajan"
}, {
  "id": "eu-ES",
  "name": "Basque (Euskara)"
}, {
  "id": "bem-ZM",
  "name": "Bemba"
}, {
  "id": "bn-IN",
  "name": "Bengali"
}, {
  "id": "my-MM",
  "name": "Burmese"
}, {
  "id": "bis-VU",
  "name": "Bislama"
}, {
  "id": "bs-BA",
  "name": "Bosnian"
}, {
  "id": "br-FR",
  "name": "Breton"
}, {
  "id": "bg-BG",
  "name": "Bulgarian"
}, {
  "id": "cb-PH",
  "name": "Cebuano"
}, {
  "id": "cha-GU",
  "name": "Chamorro"
}, {
  "id": "zh-HK",
  "name": "Chinese (Traditional - Hong Kong)"
}, {
  "id": "zh-TW",
  "name": "Chinese (Traditional - Taiwan)"
}, {
  "id": "zh-CN",
  "name": "Chinese (Simplified)"
}, {
  "id": "da-DK",
  "name": "Danish"
}, {
  "id": "de-DE",
  "name": "German"
}, {
  "id": "de-CH",
  "name": "German (Switzerland)"
}, {
  "id": "dzo-BT",
  "name": "Dzongkha"
}, {
  "id": "en-GB",
  "name": "English (GB)"
}, {
  "id": "en-US",
  "name": "English (USA)"
}, {
  "id": "eo-XN",
  "name": "Esperanto"
}, {
  "id": "et-EE",
  "name": "Estonian"
}, {
  "id": "fo-FO",
  "name": "Faroese"
}, {
  "id": "tl-PH",
  "name": "Filipino/Tagalog"
}, {
  "id": "fi-FI",
  "name": "Finnish"
}, {
  "id": "fr-FR",
  "name": "French (France)"
}, {
  "id": "fr-CA",
  "name": "French (Canada)"
}, {
  "id": "gl-ES",
  "name": "Galician"
}, {
  "id": "ka-GE",
  "name": "Georgian"
}, {
  "id": "gcl-GD",
  "name": "Creole English (Grenada)"
}, {
  "id": "el-GR",
  "name": "Greek"
}, {
  "id": "grc-GR",
  "name": "Classical Greek"
}, {
  "id": "gu-IN",
  "name": "Gujarati"
}, {
  "id": "gyn-GY",
  "name": "Creole English (Guyana)"
}, {
  "id": "ht-HT",
  "name": "Creole English (Haiti)"
}, {
  "id": "ha-HAU",
  "name": "Hausa"
}, {
  "id": "US-HI",
  "name": "Hawaiian"
}, {
  "id": "he-IL",
  "name": "Hebrew"
}, {
  "id": "hi-IN",
  "name": "Hindi"
}, {
  "id": "id-ID",
  "name": "Indonesian"
}, {
  "id": "kal-GL",
  "name": "Inuktitut, Greenlandic"
}, {
  "id": "ga-IE",
  "name": "Irish Gaelic"
}, {
  "id": "is-IS",
  "name": "Icelandic"
}, {
  "id": "it-IT",
  "name": "Italian"
}, {
  "id": "it-CH",
  "name": "Italian (Switzerland)"
}, {
  "id": "jam-JM",
  "name": "Creole English (Jamaican)"
}, {
  "id": "ja-JP",
  "name": "Japanese"
}, {
  "id": "jv-ID",
  "name": "Javanese"
}, {
  "id": "kea-CV",
  "name": "Kabuverdianu"
}, {
  "id": "kn-IN",
  "name": "Kannada"
}, {
  "id": "kk-KZ",
  "name": "Kazakh"
}, {
  "id": "ca-ES",
  "name": "Catalan"
}, {
  "id": "km-KH",
  "name": "Khmer"
}, {
  "id": "rw-KIN",
  "name": "Kinyarwanda"
}, {
  "id": "ky-KG",
  "name": "Kyrgyz"
}, {
  "id": "run-RN",
  "name": "Kirundi"
}, {
  "id": "zdj-KM",
  "name": "Comorian, Ngazidja"
}, {
  "id": "ko-KR",
  "name": "Korean"
}, {
  "id": "hr-HR",
  "name": "Croatian"
}, {
  "id": "ku-KMR",
  "name": "Kurdish Kurmanji (Latin script)"
}, {
  "id": "ku-CKB",
  "name": "Kurdish Sorani (Arabic script)"
}, {
  "id": "lo-LA",
  "name": "Lao"
}, {
  "id": "la-XN",
  "name": "Latin"
}, {
  "id": "lv-LV",
  "name": "Latvian"
}, {
  "id": "lt-LT",
  "name": "Lithuanian"
}, {
  "id": "lb-LU",
  "name": "Luxembourgish"
}, {
  "id": "mg-MLG",
  "name": "Malagasy"
}, {
  "id": "ml-IN",
  "name": "Malayalam"
}, {
  "id": "ms-MY",
  "name": "Malay"
}, {
  "id": "div-MV",
  "name": "Maldivian"
}, {
  "id": "mt-MT",
  "name": "Maltese"
}, {
  "id": "mi-NZ",
  "name": "Maori"
}, {
  "id": "mr-IN",
  "name": "Marathi"
}, {
  "id": "mk-MK",
  "name": "Macedonian"
}, {
  "id": "mn-MN",
  "name": "Mongolian"
}, {
  "id": "sr-ME",
  "name": "Montenegrin"
}, {
  "id": "mfe-MU",
  "name": "Morisyen"
}, {
  "id": "ne-NP",
  "name": "Nepali"
}, {
  "id": "nl-BE",
  "name": "Dutch (Belgium)"
}, {
  "id": "nl-NL",
  "name": "Dutch (Netherlands)"
}, {
  "id": "nb-NO",
  "name": "Norwegian"
}, {
  "id": "ny-NYA",
  "name": "Nyanja"
}, {
  "id": "pau-PW",
  "name": "Palauan"
}, {
  "id": "pap-CW",
  "name": "Papiamentu"
}, {
  "id": "ps-PK",
  "name": "Pashto"
}, {
  "id": "fa-IR",
  "name": "Farsi"
}, {
  "id": "pl-PL",
  "name": "Polish"
}, {
  "id": "pt-BR",
  "name": "Portuguese (Brazil)"
}, {
  "id": "pt-PT",
  "name": "Portuguese (Portugal)"
}, {
  "id": "pa-IN",
  "name": "Punjabi"
}, {
  "id": "qu-XN",
  "name": "Quechua"
}, {
  "id": "ro-RO",
  "name": "Romanian"
}, {
  "id": "ru-RU",
  "name": "Russian"
}, {
  "id": "acf-LC",
  "name": "Creole French (Saint Lucia)"
}, {
  "id": "smo-WS",
  "name": "Samoan"
}, {
  "id": "gd-GB",
  "name": "Scots Gaelic"
}, {
  "id": "sv-SE",
  "name": "Swedish"
}, {
  "id": "sr-Latn-RS",
  "name": "Serbian"
}, {
  "id": "crs-SC",
  "name": "Creole French (Seychelles)"
}, {
  "id": "sna-ZW",
  "name": "Shona"
}, {
  "id": "si-LK",
  "name": "Sinhala"
}, {
  "id": "sk-SK",
  "name": "Slovak"
}, {
  "id": "sl-SI",
  "name": "Slovenian"
}, {
  "id": "so-SO",
  "name": "Somali"
}, {
  "id": "nso-ZA",
  "name": "Sotho, Southern"
}, {
  "id": "es-419",
  "name": "Spanish (Latin America)"
}, {
  "id": "es-ES",
  "name": "Spanish (Spain)"
}, {
  "id": "es-US",
  "name": "Spanish (US)"
}, {
  "id": "sw-KE",
  "name": "Swahili"
}, {
  "id": "tg-TJ",
  "name": "Tajik"
}, {
  "id": "ta-IN",
  "name": "Tamil"
}, {
  "id": "te-IN",
  "name": "Telugu"
}, {
  "id": "th-TH",
  "name": "Thai"
}, {
  "id": "bod-CN",
  "name": "Tibetan"
}, {
  "id": "ti-TIR",
  "name": "Tigrinya"
}, {
  "id": "tpi-PG",
  "name": "Tok Pisin"
}, {
  "id": "ton-TO",
  "name": "Tongan"
}, {
  "id": "cs-CZ",
  "name": "Czech"
}, {
  "id": "tsn-BW",
  "name": "Tswana"
}, {
  "id": "tr-TR",
  "name": "Turkish"
}, {
  "id": "tk-TM",
  "name": "Turkmen"
}, {
  "id": "uk-UA",
  "name": "Ukrainian"
}, {
  "id": "hu-HU",
  "name": "Hungarian"
}, {
  "id": "ur-PK",
  "name": "Urdu"
}, {
  "id": "uz-UZ",
  "name": "Uzbek"
}, {
  "id": "vi-VN",
  "name": "Vietnamese"
}, {
  "id": "svc-VC",
  "name": "Creole English (Saint Vincent and the Grenadines)"
}, {
  "id": "vic-US",
  "name": "Creole English (Virgin Islands)"
}, {
  "id": "cy-GB",
  "name": "Welsh"
}, {
  "id": "be-BY",
  "name": "Belarusian"
}, {
  "id": "xh-ZA",
  "name": "Xhosa"
}, {
  "id": "yo-NG",
  "name": "Yoruba"
}, {
  "id": "zu-ZA",
  "name": "Zulu"
}];
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
  const target_language = document.getElementById('target_language');
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
  let recognizing = false; // flag 
  let transcript = ''; // full transcript text
  const img = document.getElementsByClassName('mic')[0];
  let recognition = undefined;

  for (let i = 0; i < langs.length; i++) {
    select_language.options[i] = new Option(langs[i][0], i);
  }

  for (let j = 0; j < languages.length; j++) {
    target_language.options[j] = new Option(languages[j].name, languages[j].id);
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
    recognition.lang = select_dialect.value;
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
    for (let i = select_dialect.options.length - 1; i >= 0; i--) {
      select_dialect.remove(i);
    }
    let list = langs[select_language.selectedIndex];
    for (let i = 1; i < list.length; i++) {
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

const publicTranslation = (data) => {
  const translation = document.getElementById('translation');
  translation.textContent = data;
}

const getResultTranslation = () => {
  const domen = 'https://api.mymemory.translated.net/get?';
  const from = select_dialect.value.split('-')[0];
  const to = target_language.value.split('-')[0];
  const langpair = `${from}|${to}`; // target language
  const text = transcript || 'Hello world!';
  console.log(text);
  const url = `${domen}q=${text}&langpair=${langpair}`;
  fetch(url).then(response => 
      response.json())
    .then(data => {
      publicTranslation(data.responseData.translatedText);
    });
}
