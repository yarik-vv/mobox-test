'use strict';

import scss from './scss/index.scss';
import data from './posts.json';
import mainJS from 'file-loader?name=[path][name].[ext]!./js/index.js';
import dropdownJS from 'file-loader?name=[path][name].[ext]!./js/dropdown.js';
import paginationJS from 'file-loader?name=[path][name].[ext]!./js/pagination.js';