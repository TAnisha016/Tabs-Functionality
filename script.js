document.querySelectorAll('a').forEach(tab => {
    tab.addEventListener("click",function(){

        // First hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        })
        // Showing the section with the same ID as the clicked tab's ID(after removing '-link')
        const targetId = tab.id.replace('-link','');
        document.getElementById(targetId).style.display = "block";
    })
})

// Explain of the above last 2 lines
/*
Getting the ID of the Clicked Link:

link.id retrieves the id of the clicked link.
In our example, the link’s id is something like "section1-link".
Removing "-link" from the Link’s ID:

The .replace('-link', '') method removes the "-link" part of the id.
So, if link.id was "section1-link", after .replace('-link', ''), targetId becomes "section1".
This step is done so we can match the link’s id to the corresponding content section’s id. By removing "-link", we’re left with an id that matches the actual section id.

Then, Finding and Displaying the Target Section:

document.getElementById(targetId) selects the content section with the id of "section1", matching the targetId we created.
.style.display = 'block' makes that section visible.
*/
 



