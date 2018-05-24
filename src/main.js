function application() {

    function sum() {
        return 1 + 1;
    }


    return {
        sum
    }

}








// be able to import the file in node
if (typeof (module) != 'undefined') {
    module.exports = application;
}