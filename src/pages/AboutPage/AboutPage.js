import { useState } from 'react'
import routes from '../../router/routes'
import NavBar from '../../components/NavBar/NavBar'
import styles from './AboutPage.module.scss'
export default function About (props) {
  return (
    <div className={styles.AboutPage}>
      <NavBar routes={routes} />
	  <body>
		<p>
	  Looped Automotive Technologies is a pioneer in the realm of automotive ingenuity, offering a visionary blend of state-of-the-art vehicles, innovative car accessories, and advanced tech products that collectively redefine the modern driving experience. With an unwavering commitment to pushing boundaries, Looped has established itself as a transformative force, bringing together the worlds of automobiles and technology in unprecedented ways.

As a premier provider of vehicles, Looped caters to a diverse range of tastes and preferences, boasting a diverse lineup that spans from eco-friendly hybrids to robust off-road adventurers. The vehicles embody a harmonious blend of style, performance, and cutting-edge engineering, reflecting Looped's dedication to creating a harmonious convergence of aesthetics and functionality.

Looped's innovation extends beyond the vehicles themselves, reaching into the realm of car accessories that elevate both aesthetics and functionality. From sophisticated infotainment systems that provide seamless connectivity to intelligent driver-assistance features that enhance safety, each accessory is carefully designed to complement and enhance the driving experience.

However, what truly distinguishes Looped is its Advanced Tech Division—a testament to the company's unwavering commitment to pioneering the future. This division unveils a captivating array of tech products that seamlessly integrate with the modern lifestyle. Imagine a car that can be activated remotely through a smartphone app, or a wearable device that monitors your car's diagnostics and alerts you to potential maintenance needs. These products are not merely functional; they seamlessly weave technology into the fabric of daily life.

Looped Automotive Technologies envisions a world where technology and transportation are inseparable, where vehicles are not just modes of transportation but extensions of one's lifestyle. This vision is rooted in the belief that innovation should be accessible to all, transforming routine drives into captivating journeys filled with convenience, connectivity, and the thrill of the road.

In a landscape where tradition meets the future, Looped stands as a guiding light, inviting enthusiasts and innovators alike to embark on a collaborative journey. As Looped continues to lead the charge in merging the realms of automotive excellence and advanced tech, it creates a new narrative—one that revolves around the fusion of innovation, utility, and excitement, paving the way for a driving experience like no other.
		</p>
	  </body>
    
	</div>
  )
}
