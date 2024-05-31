import { useInView } from 'react-intersection-observer';
import './PublicAnalytics.css'
import CountUp from 'react-countup';

export default function PublicAnalytics() {
    const [ref1, inView1] = useInView({ triggerOnce: true });
    const [ref2, inView2] = useInView({ triggerOnce: true });
    const [ref3, inView3] = useInView({ triggerOnce: true });
    const [ref4, inView4] = useInView({ triggerOnce: true });

    return (
        <div className='public_analytics'>
            <div className='public-analytics-container'>
                <h2 className='publicAnalytics_header'>NOS DERNIERS CHIFFRES</h2>
                <div className='analytics_conatiner'>

                    <div className='pubanalytic' ref={ref1}>
                        <p>        {inView1 ? <CountUp start={0} end={1987} duration={2} /> : '1987'}
                        </p>
                        <p>Offres d'emploi en ligne</p>
                    </div>

                    <div className='pubanalytic' ref={ref2}>
                        <p>        {inView2 ? <CountUp start={0} end={677} duration={2} /> : '677'}
                        </p>

                        <p>Postes ouverts</p>
                    </div>

                    <div className='pubanalytic' ref={ref3}>
                        <p> {inView3 ? <CountUp start={0} end={89} duration={2} /> : '89'}
                        </p>

                        <p>Recruteurs actifs</p>
                    </div>

                    <div className='pubanalytic' ref={ref4}>
                        <p> {inView4 ? <CountUp start={0} end={26} duration={2} /> : '26'}
                        </p>

                        <p>Spécialités</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
