'use_strict'

mainComponentCtrl.$inject = [];

function mainComponentCtrl ($timeout) {
    let ctrl = this;
    function init(){
        ctrl.title = "Meu componente ajs asjas ";
    }
    ctrl.$onInit = init;
}

export default function mainComponent () {
    return {
        controller: mainComponentCtrl,
        template: require('./main.component.html')
    };
}

