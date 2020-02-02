'use_strict'

mainComponentCtrl.$inject = [];

function mainComponentCtrl ($timeout) {
    let ctrl = this;
    const init = () => {
        ctrl.title = "Texto do meu componente!";
    }
    ctrl.$onInit = init;
}

export default function mainComponent () {
    return {
        controller: mainComponentCtrl,
        template: require('./main.component.html')
    };
}

