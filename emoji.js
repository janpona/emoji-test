(function($){
  
  $(document).ready(function(){
    
    var group_keys = [
      'language', 'people', 'logic', 'position', 'distinction', 'life', 'grammar', 'boundary', 'likes', 'interacting', 'color', 'presence', 'perception', 'biology', 'story', 'numbers', 'matter', 'activity', 'parts', 'artifacts', 'sky', 'traits', 'forms', 'space', 'society', 'pronouns', 'relationships'
    ];
    
    var groups = {
      'language' : ['a', 'mu', 'nimi', 'toki'],
    	'people' : ['akesi', 'jan', 'kala', 'pipi', 'soweli', 'waso'],
    	'logic' : ['ala', 'ali', 'anu', 'en', 'seme'],
    	'position' : ['anpa', 'monsi', 'sewi', 'sinpin'],
    	'distinction' : ['ante', 'kulupu', 'sama', 'sin', 'kipisi'],
    	'life' : ['awen', 'kama', 'moli', 'pini'],
    	'grammar' : ['e', 'la', 'li', 'o', 'pi'],
    	'boundary' : ['ijo', 'insa', 'selo', 'supa'],
    	'likes' : ['ike', 'yaki', 'pona', 'suwi'],
    	'interacting' : ['ilo', 'kepeken', 'lupa', 'open', 'alasa'],
    	'color' : ['jelo', 'kule', 'laso', 'loje', 'pimeja', 'walo'],
    	'presence' : ['jo', 'poka', 'weka', 'namako'],
    	'perception' : ['kalama', 'kute', 'lukin', 'pilin', 'sijelo'],
    	'biology' : ['kasi', 'kili', 'mama', 'meli', 'mije'],
    	'story' : ['ken', 'sona', 'wile'],
    	'numbers' : ['wan', 'tu', 'mute', 'nanpa', 'taso', 'kin'],
    	'matter' : ['kiwen', 'ko', 'kon', 'telo'],
    	'activity' : ['lape', 'moku', 'musi', 'pali', 'unpa'],
    	'parts' : ['lawa', 'luka', 'nena', 'noka', 'oko', 'uta'],
    	'artifacts' : ['len', 'lipu', 'poki', 'sitelen'],
    	'sky' : ['lete', 'mun', 'seli', 'suno', 'tenpo'],
    	'traits' : ['lili', 'nasa', 'suli', 'wawa'],
    	'forms' : ['linja', 'palisa', 'sike'],
    	'space' : ['lon', 'ma', 'tan', 'tawa'],
    	'society' : ['mani', 'nasin', 'tomo', 'esun', 'pan'],
    	'pronouns' : ['mi', 'ni', 'ona', 'sina'],
    	'relationships' : ['olin', 'pakala', 'pana', 'utala']
    }
    
    for (var i = 0; i < group_keys.length; ++i) {
      console.log(group_keys[i]);
    }
    console.log("Done.");
  });

})(jQuery);
