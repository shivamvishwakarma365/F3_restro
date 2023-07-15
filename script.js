function getMenu(){

    fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
      .then(res => res.json())
      .then(x => {
        myFunction(x);
      })
      .catch(error => {
        console.error('Error while fetching data:', error);
      });
    
    }
    
    getMenu();
    
    function myFunction(x) {
      let c = 0;
      let ele = document.getElementById('1');
      for (let i of x) {
        let divElement = document.createElement("div");
        divElement.id = c;
        divElement.className = 'menuitem';
    
        let imgElement = document.createElement("img");
        imgElement.src = i.imgSrc;
        divElement.appendChild(imgElement);
    
        let menuitem2 = document.createElement('div');
        menuitem2.className = 'menuitem2';
    
        let con = document.createElement('div');
        con.className = 'con';
    
        let p1 = document.createElement('p');
        p1.textContent = i.name;
        con.append(p1);
    
        let p2 = document.createElement('p');
        p2.textContent = '$'+i.price;
        con.append(p2);
    
        let img2 = document.createElement('img');
        img2.src = 'images/pic4.png';
    
        menuitem2.append(con);
        menuitem2.appendChild(img2);
        divElement.append(menuitem2);
    
        ele.appendChild(divElement);
        c++;
      }
    }