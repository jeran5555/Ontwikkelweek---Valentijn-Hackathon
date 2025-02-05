function calculateLove() {
    let name1 = document.getElementById("name1").value.trim();
    let name2 = document.getElementById("name2").value.trim();
    
    if (name1 === "" || name2 === "") {
        alert("Please enter both names!");
        return;
    }
    
    let loveScore = Math.floor(Math.random() * 101); // Generate random love percentage
    document.getElementById("lovePercentage").innerText = `${loveScore}%`;
}