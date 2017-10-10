var app = angular.module('portfolio', [])

app.controller('featuredCtrl', function($scope) {
    $scope.projects = [{
            projectName: 'Carolyn Whelan',
            frontPage: true,
            featuredImage: 'img/project_cw/ashley_cw_mac.png',
            link: 'carolyn_whelan.html'
        },
        {
            projectName: 'Quilt',
            frontPage: true,
            featuredImage: 'img/project_quilt/quilt-tablet-mock.png',
            link: 'quilt.html'
        },
        {
            projectName: 'Roslindale Village Main Street',
            frontPage: true,
            featuredImage: 'img/project_rvms/ashley_rvms_mac_mock.png',
            link: 'rvms.html'
        },
        {
            projectName: 'RSS Reader',
            frontPage: true,
            featuredImage: 'img/project_rss_reader/placeholder.gif',
            link: 'rss.html'
        },
        {
            projectName: 'Level Ground MMA',
            frontPage: true,
            featuredImage: 'img/project_lg/ashley_lg_mac.png',
            link: 'lg.html'
        },
        {
            projectName: 'Heads Or Tails',
            frontPage: true,
            featuredImage: 'img/project_headsOrTails/placeholder.gif',
            link: 'heads.html'
        }
    ]
})