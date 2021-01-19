'use strict';

// set initial count
// 이 값은 버튼을 누를때마다 count되서 바뀔테니까 let으로 한 것.
let count = 0;

/**
 * queryselectorAll()을 이용해서 모든 btn을 담은 배열을 만들고,
 * 그 배열에 forEach()를 이용해서 if (class = decrease) ~ 뭐 이런식으로
 * 모든 버튼들에 대해서 한번씩 돌면서 기능을 정의해주는 식으로 할 거라고 함.
 * 모든 버튼에 addEventListener()하는것보다 이게 더 better option 이라고 함.
*/
// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

/**
 * console.log(btns);
 * 해당 콘솔을 찍으면 NodeList라는 게 btns안에 들어있는 게 보임.
 * 
 * NodeList 객체는 일반적으로 element.childNodes와 같은 속성(property)과 
 * document.querySelectorAll 와 같은 메서드에 의해 반환되는 노드의 콜렉션입니다.
 * 
 * NodeList 가 Array 는 아니지만, forEach() 를 사용하여 반복할 수 있습니다. 
 * 또한 Array.from() 을 사용하여 Array 로 변환 할 수도 있습니다.
 */
btns.forEach(function(btn){
  // console.log(btn);
  // 콜백함수에서 event 파라미터를 받는 이유: 지금 어떤 버튼을 클릭했는지(event.currentTarget)을 알기 위해서.
  /**
   * event.target vs event.currentTarget
   * event.target은 이벤트버블링의 가장 마지막에 위치한 최하위의 요소를 반환합니다. 
   * 즉 클릭된 요소를 기준으로 사용하는 경우 event.target을 사용합니다. 
   * 하지만 event.currentTarget의 경우 이벤트가 바인딩된 요소, 해당하는 요소를 반환합니다. 
   */
  btn.addEventListener('click', function(e){
    // console.log(e.currentTarget.classList);
    const styles = e.currentTarget.classList;
    // Node.contains() 메소드는 주어진 인자가 node 의 자손인지, 아닌지에 대한 Boolean 값을 리턴합니다.
    if(styles.contains('decrease')){
      count--;
    } 
    else if (styles.contains('increase')){
      count++;
    }
    else{
      count = 0; // styles의 나머지 classList 즉, reset을 포함하는 경우 count에 0을 대입해 값을 초기화한다.
    }

    // 음수값, 0, 양수값일 때 color를 다르게 설정하는 if구문
    if(count > 0){
      // span 태그의 style 중에서 color property의 value에 'green'이라는 string값을 할당하라는 뜻.
      value.style.color = 'green';
    }
    if(count < 0){
      value.style.color = 'red';
    }
    if(count === 0){
      value.style.color = '#222';
    }

    value.textContent = count; // count--; 의 결과값이 span 태그의 텍스트를 바꿀것임.
  })
});