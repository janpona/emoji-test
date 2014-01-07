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
      'oko' : ['e1f440', '&#xd83d;&#xdc40;']
    }
    
    if (map[item] !== undefined) {
      info = map[item];
    }
    
    return info;
  }
})(jQuery);
