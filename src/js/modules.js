class MyFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
          <footer class="mt-5 mb-5">
        
          <h4 class="text-center text-white">"Simplycity is the best!"</h4>
          <h4 class="text-center text-white">Coded with ❤️ By BinukaDs.</h4>
          <h4 class="text-center md:mb-5 text-white">&copy; BinukaDs  2022 | All Rights Reserved.</h4>
          
          </footer>
    `
    }
  }
  
  customElements.define('my-footer', MyFooter);