function sound(kit, key, code) {
  document.getElementById("drum-machine").addEventListener("keydown", (event) => {
    if (event.keyCode === code) {
      event.preventDefault();
      document.getElementById(key).play();
      document.getElementById("display").innerHTML = kit;
    }
  });
  document.getElementById(kit).addEventListener("click", () => {
    document.getElementById(key).play();
    document.getElementById("display").innerHTML = kit;
  });

}

sound("clap", "Q", 81);
sound("open-hh", "W", 87);
sound("snare-drum", "E", 69);
sound("kick-n-hat", "A", 65);
sound("kick", "S", 83);
sound("closed-hh", "D", 68);
sound("shaker", "Z", 90);
sound("punchy-kick", "X", 88);
sound("side-stick", "C", 67);
