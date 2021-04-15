import React from 'react'
import { Link } from 'react-router-dom'

import beninArt from '../assets/images/benin-art.png'
import { Footer, Navbar } from '../components'

const Story = () => {
  return (
    <div>
      <Navbar position="relative" />
      <section className="p-6">
        <h1 className="text-5xl font-bold my-6 text-center">THE BENIN ARTS DILEMMA : INVASION 1867</h1>
        <div className="h-auto w-auto lg:float-left mr-4">
          <img className="mx-auto" src={beninArt} alt="benin-art" />
        </div>
        <p className="my-4 break-all">
          In lost-wax or investment casting, the artist starts with a full-sized model of the sculpture, most often a
          non-drying oil-based clay such as Plasticine model for smaller sculptures or for sculptures to be developed
          over an extended period (water-based clays must be protected from drying), and water-based clay for larger
          sculptures or for sculptures for which it is desired to capture a gestural quality - one that transmits the
          motion of the sculptor in addition to that of the subject. A mould is made from the clay pattern, either as a
          piece mould from plaster, or using flexible gel or similar rubber-like materials stabilized by a plaster
          jacket of several pieces. Often a plaster master will be made from this mould for further refinement. Such a
          plaster is a means of preserving the artwork until a patron may be found to finance a bronze casting, either
          from the original moulds or from a new mould made from the refined plaster positive.
        </p>
        <p className="my-4 break-all">
          Once a production mould is obtained, a wax (hollow for larger sculptures) is then cast from the mould. For a
          hollow sculpture, a core is then cast into the void, and is retained in its proper location (after wax
          melting) by pins of the same metal used for casting. One or more wax sprues are added to conduct the molten
          metal into the sculptures - typically directing the liquid metal from a pouring cup to the bottom of the
          sculpture, which is then filled from the bottom up in order to avoid splashing and turbulence. Additional
          sprues may be directed upward at intermediate positions, and various vents may also be added where gases could
          be trapped. (Vents are not needed for ceramic shell casting, allowing the sprue to be simple and direct). The
          complete wax structure (and core, if previously added) is then invested in another kind of mould or shell,
          which is heated in a kiln until the wax runs out and all free moisture is removed. The investment is then soon
          filled with molten bronze. The removal of all wax and moisture prevents the liquid metal from being
          explosively ejected from the mould by steam and vapour.
        </p>
        <p className="my-4 break-all">
          Students of bronze casting will usually work in direct wax, where the model is made in wax, possibly formed
          over a core, or with a core cast in place, if the piece is to be hollow. If no mould is made and the casting
          process fails, the artwork will also be lost. After the metal has cooled, the external ceramic or clay is
          chipped away, revealing an image of the wax form, including core pins, sprues, vents, and risers. All of these
          are removed with a saw and tool marks are polished away, and interior core material is removed to reduce the
          likelihood of interior corrosion. Incomplete voids created by gas pockets or investment inclusions are then
          corrected by welding and carving. Small defects where sprues and vents were attached are filed or ground down
          and polished.
        </p>
        <p className="my-4 break-all">
          For a large sculpture, the artist will usually prepare small study models until the pose and proportions are
          determined. An intermediate-sized model is then constructed with all of the final details. For very large
          works, this may again be scaled to a larger intermediate. From the final scale model, measuring devices are
          used to determine the dimensions of an armature for the structural support of a full-size temporary piece,
          which is brought to rough form by wood, cardboard, plastic foam, and/or paper to approximately fill the volume
          while keeping the weight low. Finally, plaster, clay or other material is used to form the full-size model,
          from which a mould may be constructed. Alternatively, a large refractory core may be constructed, and the
          direct-wax method then applied for subsequent investment. Before modern welding techniques, large sculptures
          were generally cast in one piece with a single pour. Welding allows a large sculpture to be cast in pieces,
          then joined.
        </p>
      </section>
      <Link to="/product" className="float-right px-6 italic opacity-80">
        See beautiful creation from this story{' '}
        <span className="underline cursor-pointer hover:opacity-70 transition-all ease-in-out">here</span>
      </Link>
      <Footer />
    </div>
  )
}

export default Story
