import { useState } from 'react';
import styles from './Tabs.module.css';

export default function Tabs({ tabs }) {
    const [activeForm, setActiveForm] = useState(tabs[0]?.id || null);

    function toggleForm(activeTabId) {
        setActiveForm(activeTabId);
    }
    return (
        <div>
            <div className={styles.tabs}>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`${styles.tabBtn} ${activeForm === tab.id && styles.active}`}
                        onClick={() => toggleForm(tab.id)}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
            {tabs.map(tab => (
                <div key={tab.id} className={`${styles.hide} ${activeForm === tab.id && styles.show}`}>
                    {tab.content}
                </div>
            ))}

        </div>
    );
}