import { useContext, useEffect, useState } from 'react'

import PaymentForm from '../components/PaymentPage/PaymentForm'
import PaymentTable from '../components/PaymentPage/PaymentTable'
import { AppData } from '../context/AppContext'

const Payments = () => {
  const [pop, setPop] = useState(false)
  const [invoice, setInvoice] = useState('')
  const [client, setClient] = useState('')
  const [project, setProject] = useState('')
  const [paidAmount, setPaidAmount] = useState('')
  const [dueAmount, setDueAmount] = useState('')
  const [status, setStatus] = useState('')
  const [id, setId] = useState('')
  const [editId, setEditId] = useState(null)

  const { payments, setPayments } = useContext(AppData)

  function submitHandler(e) {
    e.preventDefault()
    setPop(false)

    const paymentCopy = [...payments]
    if (editId != null) {
      const updatedPayment = payments.map(payment =>
        payment.id === editId ? {
          ...payment,
          invoice,
          client,
          project,
          paidAmount,
          dueAmount,
          status
        }
          : payment
      )
      setPayments(updatedPayment)
    }
    else {
      setPayments([
        { id: Date.now(), invoice, client, project, paidAmount, dueAmount, status },
        ...payments
      ])
    }
    setEditId(null)

    setInvoice('')
    setClient('')
    setProject('')
    setPaidAmount('')
    setDueAmount('')
    setStatus('')
  }
  useEffect(() => {
    localStorage.setItem('payments', JSON.stringify(payments))
  }, [payments])

  const deletePayment = (id) => {
    const updatedPayment = payments.filter(payment => payment.id !== id)
    setPayments(updatedPayment)
  }

  const editPayment = (id) => {
    const selected = payments.find(payment => payment.id === id)
    setInvoice(selected.invoice)
    setClient(selected.client)
    setProject(selected.project)
    setPaidAmount(selected.paidAmount)
    setDueAmount(selected.dueAmount)
    setStatus(selected.status)
    setEditId(id)
    setPop(true)
  }
  return (
    <div className='flex-1 mt-18 px-10 items-center relative'>
      <div className='flex justify-between w-full'>
        <span>
          <h3 className='text-xl font-semibold '>Payments</h3>
          <p className='text-sm font-semibold opacity-70'>Track all your payments an Invoices</p>
        </span>
        <button className='w-full sm:w-fit px-4 py-2 bg-green-700 text-white rounded-lg transition-all ease-in duration-200 hover:bg-green-600 active:scale-90 cursor-pointer' onClick={() => {
          setPop(true)
        }}><i className="ri-add-fill pr-1"></i>Add Payment</button>
      </div>

      <PaymentForm
        pop={pop} setPop={setPop}
        invoice={invoice} setInvoice={setInvoice}
        client={client} setClient={setClient}
        status={status} setStatus={setStatus}
        paidAmount={paidAmount} setPaidAmount={setPaidAmount}
        dueAmount={dueAmount} setDueAmount={setDueAmount}
        project={project} setProject={setProject}
        submitHandler={submitHandler}
      />

      <PaymentTable payments={payments} deletePayment={deletePayment} editPayment={editPayment} />

    </div>
  )
}

export default Payments