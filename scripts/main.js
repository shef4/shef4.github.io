
    function changeImage(selectedId) {
        
        if (document.getElementById(selectedId).src == document.getElementById("SelectedImg").src) 
        {
        }
        else 
        {
            document.getElementById("SelectedImg").src = document.getElementById(selectedId).src;
        }
    }