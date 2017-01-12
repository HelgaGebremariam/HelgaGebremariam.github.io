import NewsInitializer from './NewsInitializer.js';

var newsInitializer = (function () {
    var instance;
 
    function createInstance() {
        var object = new NewsInitializer();
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();