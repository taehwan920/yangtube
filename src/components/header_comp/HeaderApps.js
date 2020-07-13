import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <div>
                        <span><i class="fas fa-tv"></i></span>
                        <span>YouTube TV</span>
                    </div>
                </section>
                <section>
                    <div>
                        <span><i class="fas fa-music"></i></span>
                        <span>YouTube Music</span>
                    </div>
                    <div>
                        <span><i class="fas fa-child"></i></span>
                        <span>YouTube Kids</span>
                    </div>
                </section>
                <section>
                    <div>
                        <span><i class="fab fa-youtube"></i></span>
                        <span>크리에이터 아카데미</span>
                    </div>
                    <div>
                        <span><i class="fab fa-youtube"></i></span>
                        <span>YouTube for Artists</span>
                    </div>
                </section>
            </div>
        )
    }
}