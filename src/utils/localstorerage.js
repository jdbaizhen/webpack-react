export default {
    setItem: function(key, value) {
        try {
            localStorage.setItem(key, value)
        } catch (error) {
            console.log('localStorage.setItem is error'+ error);
        } 
    },
    getItem: function(key) {
        let value
        try {
            value = localStorage.getItem(key)
            return value
        } catch (error) {
            console.log('localStorage.getItem is error'+ error);          
        } finally {
            return value
        }
    }
}