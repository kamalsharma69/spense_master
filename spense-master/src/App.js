import NavBar from './NavBar';
import Select from 'react-select';
import { BsFillCalendar2DateFill } from 'react-icons/bs';
import PSelect from './PSelect';
function App() {
  const availOptions = [
    {
      label: "MINIMUM 8 GUESTS PER ROOM",
      options:[
        {
          value: 'room',
          label: 'Rooms'
        },
        {
          value: 'adult',
          label: 'Adult'
        },
        {
          value: 'children',
          label: 'Children'
        }
      ]
    }
  ]
  const styles = {
    "borderRadius": "0px",

  }
  return (
    <div>
      <NavBar></NavBar>
      <div className='overlay flex'>
        <div className='mx-auto flex flex-row p-2 items-center flex-wrap'>
          <div className='flex flex-wrap'>
            <Select  isSearchable={false} styles={{
              control: (provided, state) => ({ ...provided, ...styles, "borderTopLeftRadius": "5px", "borderBottomLeftRadius": "5px" }),
            }} classNamePrefix="react-select" placeholder={
              <div className='flex flex-row items-center justify-center'>
                <BsFillCalendar2DateFill className='text-gray-600 mx-2' />
                <p className='text-gray-600'>Check In</p>
              </div>
            } />
            <Select isSearchable={false} 
              styles={
                {
                  control: (provided, state) => ({ ...provided, ...styles }),
                }
              }
              classNamePrefix="react-select" placeholder={
                <div className='flex flex-row items-center justify-center'>
                  <BsFillCalendar2DateFill className='text-gray-600 mx-2' />
                  <p className='text-gray-600'>Check Out</p>
                </div>
              } />
            <PSelect
              styles={
                {
                  control: (provided, state) => ({ ...provided, ...styles, "borderTopRightRadius": "5px", "borderBottomRightRadius": "5px" }),
                }
              }
              classNamePrefix="react-select" options={availOptions} />
          </div>
          <button className='btn mx-2 bg-yellow-500'>Check Availability</button>
        </div>
      </div>
      <section className='w-full'>
        <div class="mcont">
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: `url('https://source.unsplash.com/720x600/?restaurant&1')`,
            }}
           class="row-span-2 col-span-2 flex items-end justify-start ">
            <img className='m-6' width={"50%"} src='/mask.png' />
          </div>
          <div class=" mbox">
            <img src='https://source.unsplash.com/720x600/?restaurant&2' />
          </div>
          <div class="mbox">
            <img src='https://source.unsplash.com/720x600/?restaurant&3' />

          </div>
          <div class="mbox">
            <img src='https://source.unsplash.com/720x600/?restaurant&4' />
          </div>
          <div class="mbox">
            <img src='https://source.unsplash.com/720x600/?restaurant&5' />
          </div>
          <div className='flex col-span-4 flex-col w-fit my-2 row-auto text-gray-600'>
            <h1 className='text-xl font-bold'>Hotel Vishal @ Airport</h1>
            <div className='flex justify-between items-center'>
              <p className=' text-sm'>104/2/2. Natioanl Hightway & Mahipur, New <a className='text-blue-400 underline font-semibold' href='#'>View Map</a></p>
              <img className='w-24 inline-block' src='/map.jpeg' />
            </div>
            <p className=' text-sm'>Delhi, 110037 New Delhi, India</p>
            <p className='font-semibold text-sm mt-2'>+91-7XXXXX, #10734444</p>
            <ul className='mul flex gap-3 my-2'>
              <li className=' mx-2 px-1'>Parking</li>
              <li className=' mx-2 px-1'>Conference Room</li>
              <li className=' mx-2 px-1'>ATM</li>
              <li className=' mx-2 px-1'>Conference Room</li>
              <li className=' mx-2 px-1'>Conference Room</li>
            </ul>
            <p>
              Located in New Delhi, Hotel Vishal @ Airport is in the business district and near the airport. Red Fort and Jama Masjid are notable landmarks, and travelers looking to shop may want to visit Chandni Chowk and DLF Emporio Vasant Kunj. KidZania Delhi NCR and Worlds of Wonder are not to be missed.
            </p>
            <hr className='bg-gray-300 my-10 h-1'></hr>
            <div className='w-full flex items-center'>
              <div className='w-full'>
                <h2 className='font-semibold text-lg'>
                  Property Rules
                </h2>
                <p className='text-sm text-gray-600 italic' >Checkin Time: 12:00PM Checkout Time: 12:00PM </p>
                <ul className='flex flex-row mt-2 mx-2 gap-4 justify-between list-disc text-gray-600'>
                  <div>
                    <li className=''>
                      Guest with feveer or cough are not allowed
                    </li>
                    <li className=''>
                      Please maintain social distancing
                    </li>
                    <li className=''>
                      Pets are not allowed </li>
                    <li className=''>
                      Outside food is not allowed</li>
                    <li className=''>
                      Smoking with the premises is not allowed
                    </li>
                    <li className=''>
                      Does not alow private parties or events</li>
                    <li className=''>
                      Gute from containment zonen are not allowed</li>
                    <li className=''>
                      Does not allow unmarried couples</li>
                    <li className=''>
                      Pets are not allowed </li>
                  </div>
                  <div>
                    <li className=''>
                      Outside food is not allowed</li>
                    <li className=''>
                      Smoking with the premises is not allowed
                    </li>
                    <li className=''>
                      Does not alow private parties or events</li>
                  </div>




                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default App;
