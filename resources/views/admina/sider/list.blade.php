@extends('admina.base')

@section('linkCss')
    <link rel="stylesheet" type="text/css" href="{{ asset('admin-assets/dist/css/login.css')}}"/>
@stop

@section('bodyClass')
    class="login-bg"
@stop

@section('header')
    @include('admina.header')
@stop

@section('content')
    <div class="page-content">
        <div class="row">
            @include('admina.sider')
            <div class="col-md-10">
                <div class="row">
                    <div class="content-box-large">
                        <div class="panel-body">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>模块名称</th>
                                    <th>模块关键词</th>
                                    <th>父级模块名称</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                @if(!is_null($rlt['siders']))
                                    @foreach ($rlt['siders'] as $sider)
                                        <tr>
                                            <td>{{$sider->id}}</td>
                                            <td>{{$sider->title}}</td>
                                            <td>{{$sider->kword}}</td>
                                            <td>{{$sider->pid}}</td>
                                            <td>
                                                @if($sider->pid==0)
                                                    {{ Html::link(url('/admina/elememtSider', array('pid'=>$sider->id)), '进入' ) }} |
                                                    {{ Html::link(url('/admina/createElememtSider', array('id'=>$sider->id)), '添加子模块' ) }} |
                                                @endif
                                                    {{ Html::link(url('/admina/updateElememtSider', array('id'=>$sider->id)), '修改' ) }}

                                            </td>
                                        </tr>
                                    @endforeach
                                @endif
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="panel-body text-center">
                        {{ $rlt['siders']->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop

@section('footer')
    @include('admina.footer')
@stop

@section('script')
    @include('admina.script')
@stop
