import { useEffect, useState } from 'react'
import Btn from '../components/Btn'
import BtnBox from '../components/BtnBox'
import Cform from '../components/ClientPage/Cform'
import ClientTable from '../components/ClientPage/ClientTable'
import { useContext } from 'react'
import { AppData } from '../context/AppContext'

const Client = () => {
  const [pop, setPop] = useState(false)
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [id, setId] = useState('')
  const [editId, setEditId] = useState(null)
  console.log(id);

  const {clients, setClients} = useContext(AppData)
  function submitHandler(e) {
    e.preventDefault()
    setPop(false)

    if (editId) {
      const updatedClient = clients.map(client =>
        client.id === editId ? {
          ...client,
          name,
          company,
          email,
          phone,
          status
        }
          : client
      )
      setClients(updatedClient)
    }
    else {
      setClients([
        {
          id, name, company, email, phone, status
        },
        ...clients
      ])
    }
    setEditId(null)
    setName('')
    setCompany('')
    setEmail('')
    setPhone('')
    setStatus('')
  }
  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients))
  }, [clients])

  const deleteClient = (id) => {
    const clientCopy = [...clients]
    const updatedClients = clients.filter(
      client => client.id !== id
    )
    setClients(updatedClients)
  }

  const editClient = (id) => {
    const selected = clients.find(client => client.id === id)
    setName(selected.name)
    setCompany(selected.company)
    setEmail(selected.email)
    setPhone(selected.phone)
    setStatus(selected.status)
    setEditId(id)
    setPop(true)
  }

  return (
    <div className='flex-1 mt-18 px-10 items-center relative'>
      <div className='flex justify-between w-full'>
        <span>
          <h3 className='text-xl font-semibold '>Clients</h3>
          <p className='text-sm font-semibold opacity-70'>Manage all your clients in one place</p>
        </span>
        <button className='px-4 py-2 bg-green-700 text-white rounded-lg transition-all ease-in duration-200 hover:bg-green-600 active:scale-90 cursor-pointer' onClick={() => {
          setPop(true)
        }}><i className="ri-add-fill pr-1"></i>Add Client</button>
      </div>
      <Cform
        pop={pop} setPop={setPop}
        id={id} setId={setId}
        name={name} setName={setName}
        company={company} setCompany={setCompany}
        phone={phone} setPhone={setPhone}
        email={email} setEmail={setEmail}
        status={status} setStatus={setStatus}
        submitHandler={submitHandler}
      />
      <ClientTable clients={clients} deleteClient={deleteClient} editClient={editClient} />
    </div>
  )
}

export default Client