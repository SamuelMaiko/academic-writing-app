import React from 'react'

const UserMngTableHead = () => {
  return (
    <thead>
        <tr className="h-[2rem] text-[1.05rem]">
            <th className="border-1 border-[rgba(0,0,0,0.2)]">Reg no.</th>
            <th className="border-1 border-[rgba(0,0,0,0.2)]">First Name</th>
            <th className="border-1 border-[rgba(0,0,0,0.2)]">Last Name</th>
            <th className="border-1 border-[rgba(0,0,0,0.2)]">Password</th>
            <th className="border-1 border-[rgba(0,0,0,0.2)]">Email</th>
            <th className="border-1 border-[rgba(0,0,0,0.2)]">Phone</th>
            <th className="border-1 border-[rgba(0,0,0,0.2)]">Role</th>
        </tr>
    </thead>
  )
}

export default UserMngTableHead