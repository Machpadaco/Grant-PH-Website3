console.log("contact.js loaded");

const form = document.getElementById('contactForm');
console.log("Form found:", form);

// Ensure the modular functions are available (we made them global in contact.html)
if (!window.addDoc || !window.collection || !window.db) {
    console.error("Firebase modular functions are not globally available. Check contact.html for modular import and global exposure.");
}

form.addEventListener('submit', async (e) => { // Use async for modern await
    e.preventDefault();
    console.log("Form submitted");

    const name = form.name.value;
    const email = form.email.value;
    const service = form.service.value;
    const message = form.message.value;

    try {
        // Use the modular functions: addDoc(collection(db, 'collectionName'), { data })
        const docRef = await addDoc(collection(db, 'contacts'), {
            name: name,
            email: email,
            service: service,
            message: message,
            // Use the modular function for server timestamp
            timestamp: serverTimestamp() 
        });
        
        console.log('Message sent successfully! Document ID:', docRef.id);
        alert('Message sent successfully!');
        form.reset();
    } catch (error) {
        console.error('Error writing document: ', error);
        alert('Failed to send message. Please try again. Check console for details.');
    }
});