/*
HTML of an astronaut list item.
replace the instances that have "THIS FORMAT HERE" with the astronautData.

<li href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
        <img src="PROFILE THUMBNAIL HERE" class="rounded float-start" alt=""">    
        <h5 class="mb-1">ASTRONAUT NAME (ASTRONAUT STATUS HERE)</h5>
        <small class="float-end">born DATE OF BIRTH HERE</small>
    </div>
    <small>ASTRONAUT NATIONALITY HERE (ASTRONAUT AGENCY NAME)</small>    
    <p class="mb-1">ASTRONAUT BIO HERE </p>
</li>
*/
const renderAstronautListItem = (astronautData, listElement) => {
    let element =  ` <li href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
            <img src="${astronautData.profile_image_thumbnail}" class="rounded float-start" alt="...">    
            <h5 class="mb-1">${astronautData.name} (${astronautData.status.name})</h5>
            <small class="float-end">born ${astronautData.date_of_birth}</small>
        </div>
        <small>${astronautData.nationality} (${astronautData.agency.name})</small>    
        <p class="mb-1">${astronautData.bio} </p>
    </li>`
    listElement.innerHTML += element
}

export { renderAstronautListItem }
