import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests } from '../utils/requestsSlice'

const Requests = () => {
    const requests = useSelector((store) => store.requests)
    const dispatch = useDispatch()

    
    const fetchRequests = async() => {
       try { 
            const res = await axios.get(BASE_URL + "/user/requests/received", {
            withCredentials: true,
        })
        dispatch(addRequests(res.data.data))
    }
        catch(err){
            console.log(err.message);
            
        }
    }

    useEffect(() => {
        fetchRequests();
    }, [])



    if(!requests) return;

    if(requests.length === 0) return <h1> No Requests Found</h1>;

  return (
    <div className='text-center my-10'>
        <h1 className='text-bold text-white text-4xl'>Connection Requests</h1>
            {
                requests.map((request) => {
                    const {firstName, lastName, photoUrl, age, gender, about, _id} = request.fromUserId;

                    return (
                        <div key={_id} className='flex justify-between items-center m-4 p-4  rounded-lg bg-base-300 w-2/3 mx-auto'>
                            <div> 
                                <img src={photoUrl} alt="photo" className='w-20 h-20 rounded-full' /> 
                            </div>
                            <div className='text-left mx-4'>
                                <h2 className='font-bold text-xl'>{firstName + " " + lastName}</h2>
                               {age && gender &&  <p>{age + " " + gender}</p>}
                                <p>{about}</p>
                            </div>
                            <div>
                                <button className="btn btn-primary mx-2">Reject</button>
                                <button className="btn btn-secondary mx-2">Accept</button>
                            </div>
                        </div>
                    )
                })
            }
        
        
    </div>
  )

}

export default Requests