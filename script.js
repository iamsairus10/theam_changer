document.querySelector("button").addEventListener('click', (e) => {
    
    //Switch theme
    document.body.classList.toggle("drk");

    //ripple effect
    let ripple = document.createElement("span");
    ripple.classList.add("ripple");
    e.target.appendChild(ripple);

    // Position the span element ripple
    let xCoordinate = e.clientX - e.target.offsetLeft;  //mouse cursor's x Coordinate (variable) - button's Left edge X Coordinate (const)
    let yCoordinate = e.clientY - e.target.offsetTop;   //mouse cursor's y Coordinate (variable) - button's Top edge Y Coordinate (const)

    ripple.style.left = `${xCoordinate}px`;
    ripple.style.top = `${yCoordinate}px`;

    // Remove span after 250ms 
    setTimeout(() => ripple.remove(), 250);

})