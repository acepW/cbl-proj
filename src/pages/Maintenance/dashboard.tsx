import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import CardDataStats from '../../components/CardDataStats'
import Production from '../../images/icon/production.svg';
import ApexCharts from 'apexcharts'
import DoughnutCart from '../../../src/components/Charts/DoughnutChart'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function Dashboard() {
    return (
        <DefaultLayout>
            <>
                <main>
                    <p className='font-semibold md:text-[28px] text-[20px] text-primary mb-[18px]'>Maintenance &gt; Overview Dashboard</p>
                    <div className='flex md:flex-row flex-col gap-3'>
                        <div className='flex bg-white rounded-md shadow-md md:w-3/12'>
                            <div className='flex justify-center items-center py-3 pl-3'>

                                <p className='text-sm text-primary'>Work Type:</p>
                            </div>

                            <div className='flex justify-center items-center'>
                                <div className="relative z-20 bg-[#D8EAFF] rounded-md dark:bg-form-input  w-40 m-3">
                                    <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >

                                        </svg>
                                    </span>

                                    <select
                                        className={`relative text-primary font-medium z-20 w-full appearance-none rounded border border-stroke bg-transparent py-1   px-1 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-inputtext-black dark:text-white' 
                                            }`}
                                    >
                                        <option value="d" className="text-body dark:text-bodydark">
                                            All
                                        </option>
                                        <option value="N" className="text-body dark:text-bodydark">
                                            Production
                                        </option>
                                        <option value="O" className="text-body dark:text-bodydark">
                                            Quality
                                        </option>

                                    </select>

                                    <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g opacity="0.8">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                                    fill="#637381"
                                                ></path>
                                            </g>
                                        </svg>
                                    </span>

                                </div>
                            </div>

                        </div>
                        <div className='bg-white rounded-md shadow-md md:w-9/12 flex flex-col md:flex-row p-3 md:gap-10 gap-2'>
                            <div className='flex items-center justify-center '>

                                <p className='text-primary text-sm font-bold'>Filter Tanggal</p>
                            </div>
                            <div className='flex md:justify-center items-center gap-2'>
                                <p className='text-sm text-primary font-medium md:w-3/12 w-2/12'>Dari:</p>
                                <div className='w-44 bg-[#D8EAFF]'>

                                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                                        <DatePicker slotProps={{ textField: { fullWidth: true, size: 'small' } }} />
                                    </LocalizationProvider>
                                </div>
                            </div>
                            <div className='flex md:justify-center items-center gap-2'>
                                <p className='text-sm text-primary font-medium md:w-3/12 w-2/12'>Sampai:</p>
                                <div className='w-44 bg-[#D8EAFF]'>

                                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                                        <DatePicker slotProps={{ textField: { fullWidth: true, size: 'small' } }} />
                                    </LocalizationProvider>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='flex md:flex-row flex-col gap-3 my-3 w-full'>
                        <div className='bg-white rounded-md shadow-md md:w-4/12'>
                            <div className="flex gap-3 p-3">

                                <img src={Production} alt="Logo" />

                                <p className="text-[14px] text-[#0065DE]">Production</p>
                            </div>
                            <div className='p-3 flex justify-center'>

                                <DoughnutCart />
                            </div>
                        </div>
                        <div className='bg-white rounded-md shadow-md md:w-8/12'>
                            <div className="flex gap-3 p-3">
                                <img src={Production} alt="Logo" />

                                <p className="text-[14px] text-[#0065DE]">Production</p>
                            </div>
                            <div className='flex flex-col w-full p-3   '>

                                <div className='grid grid-cols-5 justify-center items-center border-b-2 border-blue-700 pb-1'>
                                    <div className='flex justify-center text-sm font-bold'>
                                        <p>Kode Tiket</p>
                                    </div>
                                    <div className='flex justify-center text-sm font-bold'>
                                        <p>Work Type</p>
                                    </div>
                                    <div className='flex justify-center text-sm font-bold'>
                                        <p>Nama Mesin</p>
                                    </div>
                                    <div className='flex justify-center text-sm font-bold'>
                                        <p>Status</p>
                                    </div>
                                    <div className='flex justify-center text-sm font-bold'>
                                        <p>Jenis Kendala</p>
                                    </div>
                                </div>
                                <div className='grid grid-cols-5 justify-center text-sm items-center border-b-2 py-1 border-black '>
                                    <div className='mx-auto'>
                                        <p>3252535</p>
                                        <p>3252535</p>
                                        <p>3252535</p>
                                    </div>
                                    <div className='mx-auto'>
                                        <p>Quality</p>
                                        <p>Quality</p>
                                        <p>Quality</p>
                                    </div>
                                    <div className='mx-auto'>
                                        <p>R700</p>
                                        <p>R700</p>
                                        <p>R700</p>
                                    </div>
                                    <div className='mx-auto'>
                                        <p>OPEN</p>
                                        <p>OPEN</p>
                                        <p>OPEN</p>
                                    </div>
                                    <div className='mx-auto'>
                                        <p>Macet</p>
                                        <p>Macet</p>
                                        <p>Macet</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex md:flex-row flex-col  gap-3'>
                        <CardDataStats title="Total views" total="$3.456K" rate="0.43%" levelUp>
                            <div className="flex gap-3">
                                <img src={Production} alt="Logo" />

                                <p className="text-[14px] text-[#0065DE]">Production</p>
                            </div>
                        </CardDataStats>
                        <CardDataStats title="Total views" total="$3.456K" rate="0.43%" levelUp>
                            <div className="flex gap-3">
                                <img src={Production} alt="Logo" />

                                <p className="text-[14px] text-[#0065DE]">Production</p>
                            </div>
                        </CardDataStats>
                        <CardDataStats title="Total views" total="$3.456K" rate="0.43%" levelUp>
                            <div className="flex gap-3">
                                <img src={Production} alt="Logo" />

                                <p className="text-[14px] text-[#0065DE]">Production</p>
                            </div>
                        </CardDataStats>
                    </div>
                </main>
            </>
        </DefaultLayout>
    )
}

export default Dashboard