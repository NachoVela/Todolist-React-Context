export const getContacts = async (dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/ironman/contacts`)
    const data = await response.json()
    if (!response.ok) {
        createAgenda()
        return
    }
    console.log(data);
    dispatch({type: "set_contacts", payload: data.contacts})
    
}

export const createAgenda = async () => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/ironman`, {method: "POST"})
    const data = await response.json()
    
    console.log(data);
}

export const addContact = async (contact, navigate) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/ironman/contacts`, {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
            "Content-Type": "application/json"
        }
    })
    if(response.ok){
        navigate("/")
    }
}

export const editContact = async (contact, navigate) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/ironman/contacts/${contact.id}`, {
        method: "PUT",
        body: JSON.stringify(contact),
        headers: {
            "Content-Type": "application/json"
        }
    })
    if(response.ok){
        navigate("/")
    }
}

export const deleteContact = async (id, dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/ironman/contacts/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    if(response.ok){
        getContacts(dispatch)
    }
}