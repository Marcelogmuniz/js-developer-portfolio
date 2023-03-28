function updateProfileInfo(profileData) {
    // const photo = document.getElementById('photo')
    // photo.src = profileData.photo 
    // photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const student = document.getElementById('profile.student')
    student.innerText = profileData.student

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
    
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')

    softSkills.innerhtml = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSkills(profileData)
})()