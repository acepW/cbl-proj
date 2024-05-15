import { MasterMachine } from '../../../types/master';
// import BrandOne from '../../images/brand/brand-01.svg';
// import BrandTwo from '../../images/brand/brand-02.svg';
// import BrandThree from '../../images/brand/brand-03.svg';
// import BrandFour from '../../images/brand/brand-04.svg';
// import BrandFive from '../../images/brand/brand-05.svg';
import { useEffect, useState } from 'react';
import Modal from '../../../components/Modals/ModalDetailPopup';
// import Gambar from '../../images/BACKGROUND.png';
import Logo from '../../images/logo/logo-cbl 1.svg';
import ModalPopupReq2 from '../../Modals/ModalPopupReq';
import axios from 'axios';

const brandData: MasterMachine[] = [
    {

        code: '1.1',
        name: 'R700',
        type: 'PRINTING',
        location: 'LOCATION'

    },
    {

        code: '1.2',
        name: 'SM 74',
        type: 'PRINTING',
        location: 'LOCATION'

    },
    {

        code: '1.3',
        name: 'GTO',
        type: 'PRINTING',
        location: 'LOCATION'

    },

    {

        code: '2.1',
        name: 'HOCK',
        type: 'WATER BASE',
        location: 'LOCATION'

    },
    {

        code: '3.1',
        name: 'BOADER',
        type: 'POND',
        location: 'LOCATION'

    },
    {

        code: '4.1',
        name: 'JK 1000',
        type: 'FINISHING',
        location: 'LOCATION'

    },
];
const TableMachine = () => {
    const [isMobile, setIsMobile] = useState(false);
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };
    useEffect(() => {
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [masterMesin, setmasterMesin] = useState<any>();
    useEffect(() => {

        getMasterMesin();
    }, []);
    async function getMasterMesin() {
        const url = `${import.meta.env.VITE_API_LINK}/master/mesin`;
        try {
            const res = await axios.get(url, {
                withCredentials: true,
            });

            setmasterMesin(res.data);
            console.log(res.data);
        } catch (error: any) {
            console.log(error.data.msg);
        }
    }
    return (
        <div className="rounded-xl border border-stroke bg-white pt-4 shadow-default dark:border-strokedark dark:bg-boxdark  xl:pb-1">
            {!isMobile && (
                <>
                    <div className='flex w-full justify-end pr-8 border-b border-stroke pb-2'>
                        <button className=' bg-blue-600 rounded-sm text-white text-xs font-bold px-7 py-1'>
                            TAMBAH MACHINE
                        </button>
                    </div>

                    <div className="flex flex-col">

                        <div
                            className='flex border-b border-stroke dark:border-strokedark'


                        >
                            <div className="flex w-1/12 justify-center items-center gap-4 p-2.5 ">

                                <p className="  hidden text-[14px] text-slate-600 font-semibold dark:text-white sm:block">
                                    No
                                </p>
                            </div>

                            <div className="flex items-center w-2/12 justify-center p-2.5 ">
                                <p className="text-slate-600 text-[14px] font-semibold text-center dark:text-white">Kode Mesin</p>
                            </div>
                            <div className="flex items-center text-[14px] w-2/12 justify-center p-2.5 ">
                                <p className="text-slate-600 font-semibold text-center dark:text-white">Nama Mesin</p>
                            </div>

                            <div className="flex items-center text-[14px] w-2/12 justify-start  p-2.5 pl-9">
                                <p className="text-slate-600 font-semibold text-center">Tipe Mesin</p>
                            </div>
                            <div className="flex items-center text-[14px] w-3/12 justify-start p-2.5 pl-8 ">
                                <p className="text-slate-600 font-semibold text-center">Lokasi Mesin</p>
                            </div>

                        </div>
                        {masterMesin != null &&
                            masterMesin.map((data: any, i: number) => {
                                return (
                                    <>
                                        <div
                                            className={`flex ${i === brandData.length - 1
                                                ? ''
                                                : 'border-b border-stroke dark:border-strokedark'
                                                }`}
                                            key={i}
                                        >
                                            <div className="flex justify-center items-center w-1/12   gap-3 p-2.5">

                                                <p className="hidden text-[14px] text-black dark:text-white sm:block">
                                                    {i + 1}
                                                </p>
                                            </div>

                                            <div className="flex items-center w-2/12 justify-center p-2.5 pr-9">
                                                <p className="text-slate-600 text-[14px] font-semibold text-center dark:text-white">{data.kode_mesin}</p>
                                            </div>
                                            <div className="flex items-center text-[14px] w-2/12 justify-center p-2.5 pr-9">
                                                <p className="text-slate-600 font-semibold text-center dark:text-white">{data.nama_mesin}</p>
                                            </div>

                                            <div className="flex items-center text-[14px] w-2/12 justify-center p-2.5 pr-9">
                                                <p
                                                    className={`text-[14px] font-semibold text-center uppercase ${data.bagian_mesin === 'printing'
                                                        ? 'text-green-500' : data.bagian_mesin === 'water base / coating' ? 'text-yellow-500'
                                                            : data.bagian_mesin === 'pond' ? 'text-purple-500' : data.bagian_mesin === 'finishing' ? 'text-red-500' : 'bg-white text-white'}`}>
                                                    {data.bagian_mesin}
                                                </p>
                                            </div>
                                            <div className="flex items-center text-[14px] w-2/12 justify-center p-2.5 pr-9">
                                                <p className="text-slate-600 font-semibold text-center">{data.lokasi_mesin}</p>
                                            </div>

                                            <div className="flex items-center w-3/12 justify-center p-2.5 gap-2">
                                                <button className='bg-blue-600 rounded-sm text-white text-xs font-bold px-4 py-1'>
                                                    EDIT
                                                </button>
                                                <button className='bg-red-600 rounded-sm text-white text-xs font-bold px-4 py-1'>
                                                    DELETE
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}

                    </div>
                </>
            )}
            {isMobile && (
                <>
                    <div className='flex w-full justify-end pr-8 border-b border-stroke pb-2'>
                        <button className=' bg-blue-600 rounded-sm text-white text-xs font-bold px-7 py-1'>
                            ADD MACHINE
                        </button>
                    </div>

                    <div className="flex flex-col w-full ">

                        <div
                            className='flex border-b border-stroke dark:border-strokedark'


                        >

                            <div className="flex items-center w-3/12 justify-end p-2.5 ">
                                <p className="text-slate-600 text-[14px] font-semibold text-center dark:text-white">Kode</p>
                            </div>
                            <div className="flex items-center text-[14px] w-4/12 justify-start p-2.5 pl-4">
                                <p className="text-slate-600 font-semibold text-center dark:text-white">Nama</p>
                            </div>

                            <div className="flex items-center text-[14px] w-4/12 justify-start  p-2.5 ">
                                <p className="text-slate-600 font-semibold text-center"> Tipe</p>
                            </div>
                            <div className="flex items-center text-[14px] w-4/12 justify-start p-2.5  ">
                                <p className="text-slate-600 font-semibold text-center"> Location</p>
                            </div>

                        </div>
                        {masterMesin != null &&
                            masterMesin.map((data: any, i: number) => {
                                return (
                                    <>
                                        <div
                                            className={`flex ${i === brandData.length - 1
                                                ? 'w-full'
                                                : ' px-3 w-full'
                                                }`}
                                            key={i}
                                        >
                                            <div className="flex items-center w-2/12 justify-center p-2.5">
                                                <p className="text-slate-600 text-[14px] font-semibold text-center dark:text-white">{data.kode_mesin}</p>
                                            </div>
                                            <div className="flex items-center text-[14px] w-4/12 justify-center p-2.5 ">
                                                <p className="text-slate-600 font-semibold text-center dark:text-white">{data.nama_mesin}</p>
                                            </div>

                                            <div className="flex items-center text-[14px] w-5/12 justify-center p-2.5 ">
                                                <p
                                                    className={`text-[14px] font-semibold text-center uppercase ${data.bagian_mesin === 'printing'
                                                        ? 'text-green-500' : data.bagian_mesin === 'water base / coating' ? 'text-yellow-500'
                                                            : data.bagian_mesin === 'pond' ? 'text-purple-500' : data.bagian_mesin === 'finishing' ? 'text-red-500' : 'bg-white text-white'}`}>
                                                    {data.bagian_mesin}
                                                </p>
                                            </div>
                                            <div className="flex items-center text-[14px] w-4/12 justify-center p-2.5 ">
                                                <p className="text-slate-600 font-semibold text-center">{data.lokasi_mesin}</p>
                                            </div>


                                        </div>
                                        <div className="flex items-start w-full justify-start p-2.5 gap-2 border-b border-stroke dark:border-strokedark">
                                            <button className='bg-blue-600 rounded-sm text-white text-xs font-bold px-4 py-1'>
                                                EDIT
                                            </button>
                                            <button className='bg-red-600 rounded-sm text-white text-xs font-bold px-4 py-1'>
                                                DELETE
                                            </button>
                                        </div>

                                    </>
                                );
                            })}
                    </div>
                </>
            )}
        </div>
    );
};

export default TableMachine;
