requirejs.config({
    paths: {
        text: "libs/text"
    }
});

require(['libs/knockout'],
function(ko) {
    ko.components.register('app',  {
        viewModel: { require: 'components/App/app' },
        template: { require: 'text!components/App/app.html'}
    });

    $(document).ready(function () {
        ko.applyBindings();
    });
});