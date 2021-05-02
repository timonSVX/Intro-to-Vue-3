
//////////// VUEJS 3 //////////
const Header = {
    data() {
        return {
          product_name: 'fuckin fruits', 
          product_price : 10
        }
      },

      methods: {
        changeProduct(price) {
          if (this.product_name == 'fuckin fruits') {
            this.product_name = 'damn vegies'
            this.product_price = price 
          }
          else {
            this.product_name = 'fuckin fruits'
            this.product_price = 10
          }
        }
      }
}


//////////////////////////////////////////////
var btn = document.getElementById("btnPress");

// Btn that change its value when pressed
function press() {
    if (btn.innerHTML == "Appuie mec") {
        btn.innerHTML = "Frr le boss ;)";
    }
    else {btn.innerHTML = "Appuie mec";}
}

////////////////////////////////////
// LINK BEETWEN VIEWS & HTML IDs ///
////////////////////////////////////
Vue.createApp(Header).mount('#header')