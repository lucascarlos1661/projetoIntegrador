const BASE_API = 'https://pisistemas.000webhostapp.com/api'

export default {

    signIn: async (registration, cpf) => {
        const req = await fetch(`${BASE_API}/login.php`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ registration, cpf })
        })

        const json = await req.json()

        return json
    },

    updateUser: async (id, registration, cpf, name, phone, email, avatar) => {
        const req = await fetch(`${BASE_API}/updateUser.php`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, registration, cpf, name, phone, email, avatar })
        })

        const json = await req.json()

        return json
    },

    formSave: async (userId, fever, coriza, congestion, breathing, smell, taste, anotherSymptom, contact,
        contactDetails, familyFever, familyCoriza, familyCongestion, familyBreathing, familySmell,
        familyTaste, familyAnotherSymptom, sleep, eat, anxiety, sadness, suspect) => {
        const req = await fetch(`${BASE_API}/formSave.php`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId, fever, coriza, congestion, breathing, smell, taste, anotherSymptom, contact,
                contactDetails, familyFever, familyCoriza, familyCongestion, familyBreathing, familySmell,
                familyTaste, familyAnotherSymptom, sleep, eat, anxiety, sadness, suspect
            })
        });

        const json = await req.json();

        return json
    },

    formQuery: async (offset, where) => {
        
        const req = await fetch(`${BASE_API}/formQuery.php`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ offset, where })
        })

        const json = await req.json()

        return json
    }
};