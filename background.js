if(typeof document.getElementsByTagName('body')[0].id != 'undefined' 
    && 'kibana-body' === document.getElementsByTagName('body')[0].id) {
    var css = '.typeahead .typeahead-items { top: 32px; }',
            head = document.getElementsByTagName('head')[0],
            style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
}