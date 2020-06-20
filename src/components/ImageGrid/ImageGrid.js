import React from 'react';
import './ImageGrid.css';
import { connect } from 'react-redux';
import { loadImages } from '../../redux/actions';
import Button from '../Button';
import Stats from '../Stats';

class ImageGrid extends React.Component {

    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        const { images, isLoading, error, loadImages, imageStats } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <Stats stats={imageStats[image.id]}/>
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                </section>
                { error && <div className="error">{JSON.stringify(error)}</div> }
                <Button
                 onClick={() => !isLoading && loadImages()}
                 loading= {isLoading}>
                    Load More
                </Button>
            </div>
        );
    }
}

const mapStateToProps = ({images, isLoading, error, nextPage, imageStats }) => ({
    images,
    isLoading,
    error,
    nextPage,
    imageStats
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages())
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);