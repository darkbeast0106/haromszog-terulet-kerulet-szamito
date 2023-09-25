import './style.css';

document.addEventListener("DOMContentLoaded", init);

function init() {
    const szamitGomb = document.getElementById("szamit");
    szamitGomb.addEventListener("click", teruletEsKeruletSzamit);
}

function teruletEsKeruletSzamit() {
    const a = parseFloat(document.getElementById("aOldal").value);
    const b = parseFloat(document.getElementById("bOldal").value);
    const c = parseFloat(document.getElementById("cOldal").value);
    const eredmeny = document.getElementById("eredmeny");
    if (a + b <= c || a + c <= b || b + c <= a) {
        eredmeny.textContent = "Hibás adatok! A háromszög nem szerkeszthető";
    }
    else {
        const haromszog = {
          a: a,
          b: b,
          c: c,
          kerulet: function () {
            return this.a + this.b + this.c;
          },
          terulet: function () {
            const s = this.kerulet() / 2;
            return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
          },
          keruletEsTeruletSzoveges: function() {
            return `Kerület: ${this.kerulet()} - Terület ${this.terulet()}`;
          }
        };
        console.log(haromszog);
        eredmeny.textContent = haromszog.keruletEsTeruletSzoveges();
    }
}