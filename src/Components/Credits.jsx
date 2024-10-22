import React from 'react'

function Credits() {
  return (
    <div className='flex flex-col justify-center text-center h-screen w-screen bg-gray-900' style={{fontFamily:"Pixelify Sans"}}>
        <h1 className='text-white text-left text-2xl'>CREDITS</h1>
        <h2 className='text-gray-400 text-left'>EVERYTHING INVOLVED IN THIS PROJECT</h2>
        <hr className="text-green-500" style={{ border: '1px solid', margin: '20px 0' }} />
        <table>
            <tr>
                <td className='text-gray-400 px-4 py-4'>
                    DEVELOPED BY
                </td>
                <td className='text-white px-4 py-4'>
                    HIMANSHI GUPTA
                </td>
            </tr>
            <tr>
                <td className='text-gray-400 mt-10 px-4 py-4'>
                    DESIGNED BY
                </td>
                <td className='text-white mt-10 px-4 py-4'>
                    HIMANSHI GUPTA
                </td>
            </tr>
            <tr>
                <td className='text-gray-400 mt-10 px-4 py-4'>
                    VISUAL ASSETS
                </td>
                <td className='text-white mt-10 px-4 py-4'>
                    HIMANSHI GUPTA
                </td>
            </tr>
            <tr>
                <td className='text-gray-400 mt-10 px-4 py-4'>
                    AUDIO EFFECTS
                </td>
                <td className='text-white mt-10 px-4 py-4'>
                click, hover, typing and all other audio effects by
                </td>
            </tr>
            
            <tr>
                <td className='text-gray-400 mt-10 px-4 py-4'>
                    ICONS
                </td>
                <td className='text-white mt-10 px-4 py-4'>
                ALL ICONS BY REACT-ICONS NPM LIBRARY
                </td>
            </tr>
            
            <tr>
                <td className='text-gray-400 mt-10 px-4 py-4'>
                    MUSIC
                </td>
                <td className='text-white mt-10 px-4 py-4'>
                    HIMANSHI GUPTA
                </td>
            </tr>
        </table>
    </div>
  )
}

export default Credits
