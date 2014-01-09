(function($){
  
  $(document).ready(function(){
    
    var group_keys = [
      'language','likes','pronouns','grammar','people','logic','numbers','story','space','society','life','relationships','activity','perception','interacting','traits','sky','presence','biology','matter','parts','artifacts','position','distinction','color','boundary','forms'
    ];
    
    var groups = {
      'language' : ['a', 'mu', 'nimi', 'toki'],
      'likes' : ['ike', 'yaki', 'pona', 'suwi'],
      'pronouns' : ['mi', 'ni', 'ona', 'sina'],
      'grammar' : ['e', 'la', 'li', 'o', 'pi'],
      'people' : ['akesi', 'jan', 'kala', 'pipi', 'soweli', 'waso'],
      'logic' : ['ala', 'ali', 'anu', 'en', 'seme'],
      'numbers' : ['wan', 'tu', 'mute', 'nanpa', 'taso', 'kin'],
      'story' : ['ken', 'sona', 'wile'],
      'space' : ['lon', 'ma', 'tan', 'tawa'],
      'society' : ['mani', 'nasin', 'tomo', 'esun', 'pan'],
      'life' : ['awen', 'kama', 'moli', 'pini'],
      'relationships' : ['olin', 'pakala', 'pana', 'utala'],
      'activity' : ['lape', 'moku', 'musi', 'pali', 'unpa'],
      'perception' : ['kalama', 'kute', 'lukin', 'pilin', 'sijelo'],
      'interacting' : ['ilo', 'kepeken', 'lupa', 'open', 'alasa'],
      'traits' : ['lili', 'nasa', 'suli', 'wawa'],
      'sky' : ['lete', 'mun', 'seli', 'suno', 'tenpo'],
      'presence' : ['jo', 'poka', 'weka', 'namako'],
      'biology' : ['kasi', 'kili', 'mama', 'meli', 'mije'],
      'matter' : ['kiwen', 'ko', 'kon', 'telo'],
      'parts' : ['lawa', 'luka', 'nena', 'noka', 'oko', 'uta'],
      'artifacts' : ['len', 'lipu', 'poki', 'sitelen'],
      'position' : ['anpa', 'monsi', 'sewi', 'sinpin'],
      'distinction' : ['ante', 'kulupu', 'sama', 'sin', 'kipisi'],
      'color' : ['jelo', 'kule', 'laso', 'loje', 'pimeja', 'walo'],
      'boundary' : ['ijo', 'insa', 'selo', 'supa'],
      'forms' : ['linja', 'palisa', 'sike']
    }
    
    for (var i = 0; i < group_keys.length; ++i) {
      var snippet = render_group(group_keys[i], groups[group_keys[i]]);
      $('#build').append(snippet);
    }
    console.log("Done.");
  });

  function render_group(header, items) {
    var output = '<div class="Tn"><h3>' + header + '</h3><ul>';
    for (var i = 0; i < items.length; ++i) {
      output += '<li>' + render_item(items[i]) + '</li>';
    }
    output += '</ul></div>';
    return output;
  }
  
  function render_item(item) {
    var output = '';
    
    var info = item_info(item);
    if (info.length) {
      var classname = info[0];
      var text = info[1];
      output = '<span class="Pt">';
      output += '<span style="opacity:0.0; width: 0; display:inline-block;">';
      output += text;
      output += '</span><div class="' + classname + ' vm" style="display:inline-block;"></div></span>';
    }
    else {
      output = item + '&nbsp;';
    }
    
    return output;
  }
  
  function item_info(item) {
    var info = [];
    
    // Maps each toki pona word to an original google emoji class name
    // and a default inner text value.
    var map = {
      'tomo' : ['e1f3e0', '&#xd83c;&#xdfe0;'],
      'seli' : ['e1f525', '&#xd83d;&#xdd25;'],
      'kala' : ['e1f41f', '&#xd83d;&#xdc1f;'],
      'pona' : ['e263a', '&#x263a;'],
      'toki' : ['e1f4ac', '&#xd83d;&#xdcac;'],
      'ala' : ['e1f6ab', '&#xd83d;&#xdeab;'],
      'anpa' : ['e1f447', '&#xd83d;&#xdc47;'],
      'sin' : ['e2734', '&#x2734;'],
      'moli' : ['e1f480', '&#xd83d;&#xdc80;'], 
      'sona' : ['e1f4ad', '&#xd83d;&#xdcad;'],
      'olin' : ['e2764', '&#x2764;'],
      'kalama' : ['e1f3b5', '&#xd83c;&#xdfb5;'],
      'unpa' : ['e1f48f', '&#xd83d;&#xdc8f;'], 
      'ilo' : ['e1f528', '&#xd83d;&#xdd28;'],
      'ma' : ['e1f6a9', '&#xd83d;&#xdea9;'],
      'kili' : ['e1f353', '&#xd83c;&#xdf53;'],
      'mama' : ['e1f46a', '&#xd83d;&#xdc6a;'],
      'telo' : ['e1f4a7', '&#xd83d;&#xdca7;'],
      'oko' : ['e1f440', '&#xd83d;&#xdc40;'],
      'wawa' : ['e1f4aa', '&#xd83d;&#xdcaa;'],
      'suno' : ['e2600', '&#x2600;'],
      'kute' : ['e1f442', '&#xd83d;&#xdc42;'],
      'noka' : ['e1f463', '&#xd83d;&#xdc63;'],
      'laso' : ['e2b1c', '&#x2b1c;'],
      'loje' : ['e2b1b', '&#x2b1b;'],
      'jelo' : ['e1f536', '&#xd83d;&#xdd36;'],
      'pipi' : ['e1f41c', '&#xd83d;&#xdc1c;'],
      'waso' : ['e1f426', '&#xd83d;&#xdc26;'],
      'mani' : ['e1f4b8', '&#xd83d;&#xdcb8;'],
      'soweli' : ['e1f415', '&#xd83d;&#xdc15;'],
      'pimeja' : ['e1f311', '&#xd83c;&#xdf11;'],
      'suwi' : ['e1f36c', '&#xd83c;&#xdf6c;'],
      'moku': ['e1f374', '&#xd83c;&#xdf74;'],
      'sike' : ['e2b55', '&#x2b55;'],
      'lape' : ['e1f634', '&#xd83d;&#xde34;'],
      'kasi' : ['e1f333', '&#xd83c;&#xdf33;'],
      'poki' : ['e1f376', '&#xd83c;&#xdf76;'],
      'tenpo': ['e1f552', '&#xd83d;&#xdd52;'],
      'palisa': ['e1f4cf', '&#xd83d;&#xdccf;'],
      'kulupu': ['e2728', '&#x2728;'],
      'kiwen': ['e1f48e', '&#xd83d;&#xdc8e;'],
      'akesi': ['e1f40d', '&#xd83d;&#xdc0d;'],
      'pakala': ['e1f4a3', '&#xd83d;&#xdca3;'],
      'pan': ['e1f35a', '&#xd83c;&#xdf5a;'],
      'mun' : ['e1f319', '&#xd83c;&#xdf19;'],
      'linja' : ['e3030', '&#x3030;'],
      'ike' : ['e1f635', '&#xd83d;&#xde35;'],
      'yaki' : ['e1f4a9', '&#xd83d;&#xdca9;'],
      'utala' : ['e1f4a5', '&#xd83d;&#xdca5;'],
      'nasa' : ['e1f4ab', '&#xd83d;&#xdcab;'],
      'lete' : ['e2744', '&#x2744;'],
      'pana' : ['e1f381', '&#xd83c;&#xdf81;'],
      'sitelen' : ['e1f4dd', '&#xd83d;&#xdcdd;'],
      'uta' : ['e1f444', '&#xd83d;&#xdc44;'],
      'musi' : ['e1f64c', '&#xd83d;&#xde4c;']
    }
    
    if (map[item] !== undefined) {
      info = map[item];
    }
    
    return info;
  }
})(jQuery);
