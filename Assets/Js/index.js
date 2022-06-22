function select() {
    var x = window.matchMedia("(max-width: 768px)")

    if (x.matches) {
        document.getElementById('whatsapp_desktop').href = 'https://api.whatsapp.com/send?phone=94755408993&text=Hi!%20This%20message%20from%20BinukaDs.me%20website%20:D'
        document.getElementById('whatsapp_desktop_2').href = 'https://api.whatsapp.com/send?phone=94755408993&text=Hi!%20This%20message%20from%20BinukaDs.me%20website%20:D'
    }

    else{
        document.getElementById('whatsapp_desktop').href = 'https://web.whatsapp.com/send?phone=94755408993&text=Hi!%20This%20message%20from%20BinukaDs.me%20website%20:D'; 
        document.getElementById('whatsapp_desktop_2').href = 'https://web.whatsapp.com/send?phone=94755408993&text=Hi!%20This%20message%20from%20BinukaDs.me%20website%20:D'; 
    }
}


