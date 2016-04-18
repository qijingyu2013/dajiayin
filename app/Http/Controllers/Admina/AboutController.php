<?php

namespace App\Http\Controllers\Admina;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Models\About;
use App\Models\Notice;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

/**模块->关于大家银
 * Class AboutController
 * @package App\Http\Controllers\Admina
 */
class AboutController extends Controller
{
    /**大家银贵金属
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function getAboutMe()
    {
        $about = About::firstOrCreate(About::$rules_aboutme);
        return view('admina.about.aboutme', compact('about'));
    }

    /**
     * 修改功能
     * @return Redirect
     */
    public function postAboutMe()
    {
        $validator = Validator::make(Input::all(), About::$rules_update);
        if ($validator->passes()) {
            $about = About::firstOrNew(About::$rules_aboutme);
            $about->content = Input::get('form_text');
            $about->module = Input::get('form_module');
            $about->save();
            return Redirect::to('admina/about/aboutMe')->with('message', '修改成功!');
        } else {
            return Redirect::back()->withErrors($validator)->withInput();
        }
    }

    /**
     * 查询大家银优势
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function getSuperiority()
    {
        $about = About::firstOrCreate(About::$rules_superiority);
        return view('admina.about.superiority', compact('about'));
    }

    /**
     * 修改功能
     * @return Redirect
     */
    public function postSuperiority()
    {
        $validator = Validator::make(Input::all(), About::$rules_update);
        if ($validator->passes()) {
            $about = About::firstOrNew(About::$rules_superiority);
            $about->content = Input::get('form_text');
            $about->module = Input::get('form_module');
            $about->save();
            return Redirect::to('admina/about/superiority')->with('message', '修改成功!');
        } else {
            return Redirect::back()->withErrors($validator)->withInput();
        }
    }

    public function getNoticeList()
    {
        $notices = Notice::where("module", "=", 'notice')->orderBy('id', 'desc')->paginate(10);
        return view('admina.about.noticelist', compact('notices'));
    }

    public function getNotice($id)
    {
        $siderTitle = '修改公告';
        $siderButton = '修改';
        $siderUrl = 'update';
        $notice = Notice::find($id);
        return view('admina.about.noticedetail', compact('notice', 'siderUrl', 'siderTitle', 'siderButton'));
    }

    public function createNotice()
    {
        $siderTitle = '新增公告';
        $siderButton = '添加';
        $siderUrl = 'create';
        return view('admina.about.noticedetail', compact('siderUrl', 'siderTitle', 'siderButton'));
    }

    public function postNotice($siderType)
    {
        if ($siderType == 'create') {
            $validator = Validator::make(Input::all(), Notice::$rules_create, Notice::$message_comm, Notice::$attributes_comm);
            if ($validator->passes()) {
                $notice = new Notice();//实例化Sider对象
                $notice->title = Input::get('title');
                $notice->content = Input::get('content');
                $notice->module = 'notice';
                $notice->author = 'admin';
                $notice->save();
                return Redirect::to('admina/about/notice')->with('message', '添加成功,这篇公告的编号是' . $notice->getKey() . '!');
            } else {
                return Redirect::back()->withErrors($validator)->withInput();
            }
        } elseif ($siderType == 'update') {
            $validator = Validator::make(Input::all(), Notice::$rules_update);
            if ($validator->passes()) {
                $notice = Notice::find(Input::get('noticeId'));
                $notice->title = Input::get('title');
                $notice->content = Input::get('content');
                $notice->save();
                return Redirect::to('admina/about/notice')->with('message', '修改成功,这篇公告的编号是' . $notice->getKey() . '!');
            } else {
                return Redirect::to('admina/about/getNotice/' . Input::get('noticeId'))->with('message', '请您正确填写下列数据')->withErrors($validator);//->withInput()
            }
        }
        return view('admina.sider.detail');
    }

    public function dropNotice($id)
    {
        $rlt = Notice::destroy($id);
        return Redirect::to('admina/about/notice')->with('message', '删除成功,这篇公告的编号是' . $rlt . '!');
    }

    /**
     * @param $pid
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function getElememtList($pid)
    {
        $aboutLeft = About::where("pid", "=", 0)->with('hasManyAbouts')->get();
        $abouts = About::where("pid", "=", $pid)->paginate(10);
        $rlt = array('aboutLeft' => $aboutLeft, 'abouts' => $abouts);
        return view('admina.about.list', compact('rlt'));
    }

    public function createElememtAbout($pid)
    {
        $aboutLeft = About::where("pid", "=", 0)->with('hasManyAbouts')->get();
        $abouts = About::getAboutSelectList();
        $aboutIcon = About::getIconTag();
        $aboutUrl = 'create';
        $rlt = array('aboutLeft' => $aboutLeft, 'abouts' => $abouts, 'aboutTitle' => '新增侧边栏', 'aboutButton' => '添加', 'aboutIcon' => $aboutIcon, 'pid' => $pid, 'aboutUrl' => $aboutUrl);
        return view('admina.about.detail', compact('rlt'));
    }

    public function updateElememtAbout($id)
    {
        $aboutLeft = About::where("pid", "=", 0)->with('hasManyAbouts')->get();
        $abouts = About::getAboutSelectList();
        $aboutIcon = About::getIconTag();
        $about = About::find($id);
        $aboutUrl = 'update';
        $rlt = array('aboutLeft' => $aboutLeft, 'abouts' => $abouts, 'about' => $about, 'aboutTitle' => '修改侧边栏', 'aboutButton' => '修改', 'aboutIcon' => $aboutIcon, 'id' => $id, 'aboutUrl' => $aboutUrl);
        return view('admina.about.detail', compact('rlt'));
    }

    public function getElememtDetail()
    {

        return view('admina.about.detail');
    }

    public function postElememtDetail($aboutType)
    {
        if ($aboutType == 'create') {
            $validator = Validator::make(Input::all(), About::$rules_create);
            if ($validator->passes()) {
                $about = new About();//实例化About对象
                $about->title = Input::get('title');
                $about->ctrl = Input::get('ctrl');
                $about->kword = Input::get('kword');
                $about->pid = Input::get('pid');
                $about->save();
                return Redirect::to('admina/about')->with('message', '添加成功,这个栏目的编号是' . $about->getKey() . '!');
            } else {
                return Redirect::to('admina/createElememtAbout/' . Input::get('pid'))->with('message', '请您正确填写下列数据')->withErrors($validator)->withInput();
            }
        } elseif ($aboutType == 'update') {
            $validator = Validator::make(Input::all(), About::$rules_update);
            if ($validator->passes()) {
                $about = About::find(Input::get('aboutId'));
                $about->title = Input::get('title');
                $about->ctrl = Input::get('ctrl');
                $about->kword = Input::get('kword');
                $about->pid = Input::get('pid');
                $about->save();
                return Redirect::to('admina/about')->with('message', '修改成功,这个栏目的编号是' . $about->getKey() . '!');
            } else {
                return Redirect::to('admina/updateElememtAbout/' . Input::get('aboutId'))->with('message', '请您正确填写下列数据')->withErrors($validator)->withInput();
            }
        }
        return view('admina.about.detail');
    }

    public function store(CreateArticleRequest $request)
    {
        Article::create($request->all());
        return redirect('admina/index');
    }
}
