import React from 'react'

const TheMintSection = () => {
  return (
    <div className='the-mint-section'>
        
        <div className='section-title'>
            <h1>Mint Info</h1>
            <div className='border-left'></div>
        </div>


        <div className='main'>

            <div className='mint-info'>
                <main>
                    <div>
                        <img src="/svg/decorative-flower-dark.svg" alt="" />
                        <p>500 Spots</p>
                    </div>
                    <div>
                        <img src="/svg/decorative-flower-lite.svg" alt="" />
                        <p>Only 500 NFTs are served for the pre-sale</p>
                    </div>
                    <div>
                        <img src="/svg/decorative-flower-dark.svg" alt="" />
                        <p>Price: 0.3138ETH</p>
                    </div>
                </main>

                <footer>
                    <h4>PRE-SALE ALLOW LIST</h4>
                    <p>July 31 07:33pm EST</p>
                </footer>
            </div>

            <div className='mint-info'>
                <main>
                    <div>
                        <img src="/svg/decorative-flower-dark.svg" alt="" />
                        <p>All the remaining assets not sold in pre-sale 6,522</p>
                    </div>
                    <div>
                        <img src="/svg/decorative-flower-lite.svg" alt="" />
                        <p>Only 500 NFTs are served for the pre-sale</p>
                    </div>
                </main>

                <footer>
                    <h4>PUBLIC MINT</h4>
                    <p>July 31 07:33pm EST</p>
                </footer>
            </div>
        </div>

    </div>
  )
}

export default TheMintSection