import * as React from 'react';
import { MainBodyHolder } from '../components/component-main-body-holder';
import { BookshelfIntro } from '../components/component-bookshelf-intro';
import { BookCard } from '../components/component-book-card';

export default () => (
    <div>
        <MainBodyHolder>
            <BookshelfIntro />
            <BookCard></BookCard>
        </MainBodyHolder>
    </div>
)