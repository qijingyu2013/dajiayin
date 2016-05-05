<?php

namespace App\Http\Controllers\Sites;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Models\About;
use App\Models\Award;
use App\Models\Notice;
use App\Models\Product;
use App\Models\Sider;

//use App\Logic\Article;

class ProductController extends Controller
{
    /**
     * 大圆沥青
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showJmeliqing()
    {
        $Sider = new Sider();
        $breadcrumbs = $Sider->getBreadcrumbs('jmeliqing');
        $product = Product::where('module', '=', 'jmeliqing')->first();
        $type = 'product';
        $productType = 'jme';
        return view('sites.product.product', compact('breadcrumbs', 'product', 'type', 'productType'));
    }

    /**
     * 大圆普洱
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showJmepuer()
    {
        $Sider = new Sider();
        $breadcrumbs = $Sider->getBreadcrumbs('jmepuer');
        $product = Product::where('module', '=', 'jmepuer')->first();
        $type = 'product';
        $productType = 'jme';
        return view('sites.product.product', compact('breadcrumbs', 'product', 'type', 'productType'));
    }

    /**
     * 大圆银
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showJmeyin()
    {
        $Sider = new Sider();
        $breadcrumbs = $Sider->getBreadcrumbs('jmeyin');
        $product = Product::where('module', '=', 'jmeyin')->first();
        $type = 'product';
        $productType = 'jme';
        return view('sites.product.product', compact('breadcrumbs', 'product', 'type', 'productType'));
    }


    /**
     * 关于大家银
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showAboutMe()
    {
        $Sider = new Sider();
        $breadcrumbs = $Sider->getBreadcrumbs('aboutMe');
        $about = About::where('module', '=', 'aboutme')->first();
        return view('sites.about.aboutme', compact('breadcrumbs', 'about'));
    }

    /**
     * 大家银优势
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showSuperiority()
    {
        $Sider = new Sider();
        $breadcrumbs = $Sider->getBreadcrumbs('superiority');
        $about = About::where('module', '=', 'superiority')->first();
        return view('sites.about.superiority', compact('breadcrumbs', 'about'));
    }

    /**
     * 新闻公告列表
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showNotice()
    {
        $Sider = new Sider();
        $breadcrumbs = $Sider->getBreadcrumbs('notice');
        $notices = Notice::where("module", "=", 'notice')->orderBy('id', 'desc')->paginate(10);
        return view('sites.about.noticelist', compact('breadcrumbs', 'notices'));
    }

    /**
     * 新闻公告详细页
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showNoticeDetail($id)
    {
        $Sider = new Sider();
        $breadcrumbs = $Sider->getBreadcrumbs('notice');
        $notice = Notice::find($id);
        return view('sites.about.noticedetail', compact('breadcrumbs', 'notice'));
    }

    /**
     * 奖项列表
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showAward()
    {
        $Sider = new Sider();
        $breadcrumbs = $Sider->getBreadcrumbs('award');
        $awards = Notice::where("module", "=", 'award')->orderBy('id', 'desc')->paginate(8);
        return view('sites.about.awardlist', compact('breadcrumbs', 'awards'));
    }

    /**
     * 奖项详细页
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showAwardDetail($id)
    {
        $Sider = new Sider();
        $breadcrumbs = $Sider->getBreadcrumbs('award');
        $award = Notice::find($id);
        return view('sites.about.awarddetail', compact('breadcrumbs', 'award'));
    }

    /**
     * 媒体报道列表
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showMedia()
    {
        $Sider = new Sider();
        $breadcrumbs = $Sider->getBreadcrumbs('media');
        $notices = Notice::where("module", "=", 'media')->orderBy('id', 'desc')->paginate(10);
        return view('sites.about.medialist', compact('breadcrumbs', 'notices'));
    }

    /**
     * 媒体报道详细页
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showMediaDetail($id)
    {
        $Sider = new Sider();
        $breadcrumbs = $Sider->getBreadcrumbs('media');
        $notice = Notice::find($id);
        return view('sites.about.mediadetail', compact('breadcrumbs', 'notice'));
    }

    /**
     * 媒体报道列表
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showTeam()
    {
        $Sider = new Sider();
        $breadcrumbs = $Sider->getBreadcrumbs('team');
        $notices = Notice::where("module", "=", 'team')->orderBy('id', 'desc')->paginate(3);
        return view('sites.about.teamlist', compact('breadcrumbs', 'notices'));
    }

    /**
     * 媒体报道详细页
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showTeamDetail($id)
    {
        $Sider = new Sider();
        $breadcrumbs = $Sider->getBreadcrumbs('team');
        $notice = Notice::find($id);
        return view('sites.about.teamdetail', compact('breadcrumbs', 'notice'));
    }

    /**
     * 联系我们
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showContact()
    {
        $Sider = new Sider();
        $breadcrumbs = $Sider->getBreadcrumbs('contact');
        $about = About::where('module', '=', 'contact')->first();
        return view('sites.about.contact', compact('breadcrumbs', 'about'));
    }
}