<template>
  <article class="content container-fluid">

    <!-- <template v-if="!host.error && host.name"> -->
    <nav aria-label="breadcrumb">
      <div class="breadcrumb mt-3 d-flex justify-content-between align-items-center">
        <ol class="breadcrumb mb-0 p-0">
          <li class="breadcrumb-item">
            <a href="javascript:void(0)" @click="host = {}">Hosts</a>
          </li>
          <li
            v-if="!host.error && host.name"
            :class="['breadcrumb-item', {active: host.name && !bucket}]"
            aria-current="page"
          >
            <a href="javascript:void(0)" @click="bucket = ''">{{ host.name }}</a>
          </li>
          <li
            :class="['breadcrumb-item', {active: host.name && bucket}]"
            aria-current="page"
            v-if="host.name && bucket"
          >{{ bucket }}</li>
        </ol>
        <div class="btn-group">
          <button class="btn btn-sm btn-outline-success" v-if="!host.name">Add Host</button>
          <button
            class="btn btn-sm btn-outline-danger"
            @click="host = {}"
            v-if="!host.error && host.name"
          >Disconnect</button>
        </div>
      </div>
    </nav>
    <!-- </template> -->

    <section>
      <div class="page-header">
        <h1 v-if="!host.error && host.name">
          Host:
          <small class="text-muted">{{ host.name }}</small>
        </h1>
        <h1 v-else>Hosts</h1>

        <p v-if="!host.error && host.name"></p>
        <p v-else>
          Below is a list of your S3 compatible storage hosts, which you can manage by clicking connect.
          <!--
          S3 compatible storage hosts are securely stored in your browsers local storage

          All communications are directly between your
          browser and the S3 server, we use the awesome Open Source minio clientside
          Javascript library to achieve this.
          -->
        </p>
      </div>

      <div class="mt-2">
        <div
          class="alert alert-dismissible fade show"
          :class="alert.type"
          role="alert"
          v-if="alert.type"
        >
          <div v-html="alert.message"></div>
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
            @click="alert = {}"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <template v-if="!host.error && host.name">
          <!-- <div class="breadcrumb-container">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="javascript:void(0)" @click="host = {}">Home</a>
              </li>
              <li :class="['breadcrumb-item', {active: host.name && !bucket}]" aria-current="page">
                <a href="javascript:void(0)" @click="bucket = ''">{{ host.name }}</a>
              </li>
              <li
                :class="['breadcrumb-item', {active: host.name && bucket}]"
                aria-current="page"
                v-if="host.name && bucket"
              >{{ bucket }}</li>
            </ol>
            <button class="btn btn-sm btn-outline-danger float-right" @click="host = {}">Disconnect</button>
          </div>-->

          <!--<pre>{{ host }}</pre>-->

          <div class="row">
            <!-- <div class="col-5 col-sm-4 col-lg-3" v-if="!bucket">
              <div class="card">
                <div class="card-header">
                  <div class="row no-gutters">
                    <div class="card-title col-12 col-md-4">Buckets</div>
                    <div class="input-group input-group-sm col-12 col-md-8">
                      <input
                        class="form-control"
                        v-model="bucketFilter"
                        placeholder="Filter buckets..."
                      />
                    </div>
                  </div>
                </div>
                <ul class="list-group list-group-flush">
                  <li
                    class="list-group-item pointer text-small"
                    v-for="bucket in filteredBuckets"
                    :key="bucket.name"
                    @click="listObjects(bucket.name)"
                  >
                    <button class="float-right btn btn-xxs btn-outline-danger">
                      <fa icon="times"></fa>
                    </button>
                    {{ bucket.name }}
                  </li>
                </ul>
              </div>
            </div>
            <div :class="[{'col-7 col-sm-8 col-lg-9': !bucket, 'col': bucket}]">-->
            <div class="card sticky" v-if="bucket">
              <div class="card-header">
                <div class="row no-gutters">
                  <div class="card-title col-8">Objects ({{ bucket }})</div>
                  <div class="input-group input-group-sm col-4">
                    <input
                      class="form-control"
                      v-model="objectFilter"
                      placeholder="Filter objects..."
                    />
                  </div>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Name</th>
                      <th scope="col">Last Modified</th>
                      <th scope="col">Mime</th>
                      <th scope="col">Size</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in filteredObjects" :key="item.name">
                      <td scope="row">
                        <img
                          class="mr-3 mt-1"
                          :load="getImage(item)"
                          :src="item.src || ''"
                          alt
                          style="width:120px; border-radius:5px"
                        />
                      </td>
                      <td>{{ item.name }}</td>
                      <td>{{ item.lastModified.toLocaleString() }}</td>
                      <td>{{ item.name | mime }}</td>
                      <td>{{ item.size | formatBytes }}</td>
                      <td>
                        <button class="btn btn-sm btn-outline-success" @click="open(item)">Open</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div v-else>
              <p>Select a bucket to show its objects.</p>
            </div>
            <!-- </div> -->
          </div>
        </template>
        <template v-else>
          <div class="table-responsive border border-top-0 rounded">
            <table class="table table-sm">
              <thead>
                <tr class="bg-light">
                  <th scope="col" class="p-2" width="30%">Name</th>
                  <th scope="col" class="p-2" width="50%">URL</th>
                  <!-- <th scope="col">Access Key</th>
                  <th scope="col" idth="1%">Access Secret</th>-->
                  <th scope="col" width="10%"></th>
                  <th scope="col" width="10%"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(host, key) in state.hosts" :key="key">
                  <th scope="row">{{ key }}</th>
                  <td>{{ host.url }}</td>
                  <!-- <td>{{ host.accessKey }}</td>
                  <td>{{ host.secretKey }}</td>-->
                  <td class="text-right">
                    <span class="table-icon" v-if="host.accessKey && host.secretKey">
                      <fa icon="lock" class="text-success"></fa>
                    </span>

                    <span class="table-icon" v-if="host.accessKey && host.secretKey">
                      <fa icon="globe" class="text-success"></fa>
                    </span>
                  </td>
                  <td class="text-right">
                    <button
                      class="btn btn-xxs btn-outline-success"
                      @click="setHost(host, key)"
                    >Connect</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
      </div>
    </section>
  </article>
</template>

<script>
import '../plugins/img-lazyload'

const mime = require('mime-types')
const url = require('url');
const path = require('path')

export default {
  name: "index",
  props: ['state', 'host_key', 'bucket'],
  components: {},
  data: function () {
    return {
      alert: {},
      host: {},
      objects: [],
      // bucket: '',
      bucketFilter: '',
      objectFilter: '',
      // // will be list of hosts stored in localstorage
      // hosts: {
      //   "engagementnetworks": {
      //     "url": "https://images.engagementnetworks.com",
      //     "accessKey": "mjbfBPgbIQ1vxemsH9ZqAUN7Wg7Y7jsh",
      //     "secretKey": "I0bXC8tmPJ4lAQGGMfL9qtMLr6BBGKyO",
      //     "api": "S3v4",
      //     "lookup": "auto"
      //   },
      //   // "gcs": {
      //   //   "url": "https://storage.googleapis.com",
      //   //   "accessKey": "YOUR-ACCESS-KEY-HERE",
      //   //   "secretKey": "YOUR-SECRET-KEY-HERE",
      //   //   "api": "S3v2",
      //   //   "lookup": "dns"
      //   // },
      //   // "local": {
      //   //   "url": "http://localhost:9000",
      //   //   "accessKey": "",
      //   //   "secretKey": "",
      //   //   "api": "S3v4",
      //   //   "lookup": "auto"
      //   // },
      //   // "play": {
      //   //   "url": "https://play.min.io:9000",
      //   //   "accessKey": "Q3AM3UQ867SPQQA43P2F",
      //   //   "secretKey": "zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG",
      //   //   "api": "S3v4",
      //   //   "lookup": "auto"
      //   // },
      //   // "s3": {
      //   //   "url": "https://s3.amazonaws.com",
      //   //   "accessKey": "YOUR-ACCESS-KEY-HERE",
      //   //   "secretKey": "YOUR-SECRET-KEY-HERE",
      //   //   "api": "S3v4",
      //   //   "lookup": "dns"
      //   // }
      //}
    }
  },
  watch: {
    bucket: function (newVal){
      this.listObjects(newVal)
    }
  },
  computed: {
    filteredBuckets() {
      return this.host.buckets.filter(item => {
        return item.name && item.name.toLowerCase().indexOf(this.bucketFilter.toLowerCase()) > -1
      })
    },
    filteredObjects() {
      return this.objects.filter(item => {
        item.bucket = this.bucket
        return item.name && item.name.toLowerCase().indexOf(this.objectFilter.toLowerCase()) > -1
      })
    },
  },
  mounted() {
    this.$set(this.state, 'host', this.state.hosts[this.host_key])
    this.setHost(this.state.host, this.host_key)
    if (this.bucket){
       this.listObjects(this.bucket)
    }
  },
  filters: {
    mime: function (value) {
      return mime.lookup(value)
    },
    formatBytes(bytes) {
      if (bytes === 0) return '0 Bytes'
      var k = 1024
      var dm = 2
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
      var i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
    }
  },
  methods: {
    setHost(host, key) {

      this.alert = {}

      this.host = {
        name: key,
        ...host,
        hostname: '',
        port: 9000,
        useSSL: false,
        error: null,
        buckets: []
      }

      host = new URL(this.host.url)

      this.host.hostname = host.hostname
      this.host.port = parseInt(host.port, 10)
      this.host.useSSL = host.protocol === 'https:'

      window.minioClient = new minio.Client({
        endPoint: this.host.hostname,
        port: this.host.port,
        useSSL: this.host.useSSL,
        accessKey: this.host.accessKey,
        secretKey: this.host.secretKey
      })

      this.listBuckets()
    },
    async listBuckets() {
      try {
        this.host.buckets = await minioClient.listBuckets()

        this.$set(this.state, 'host', this.host)
        this.$set(this.state.hosts[this.host_key], 'buckets', this.host.buckets)
      } catch (e) {
        this.host.error = e.message
        this.alert = {
          type: 'alert-danger',
          message: e.message
        }
      }
    },
    async listObjects() {
      try {

        this.objects = []
        // this.bucket = arguments[0]

        // list all objects in bucket by path prefix
        const objectStream = await minioClient.listObjectsV2(...arguments)

        objectStream.on('data', (obj) => {
          if (obj && (obj.name || obj.prefix)) {
            this.objects.push(obj)
          }
        })

        objectStream.on('error', (e) => {
          this.host.error = e.message
          this.alert = {
            type: 'alert-danger',
            message: e.message
          }
        })

        objectStream.on('end', () => {

        })

      } catch (e) {
        this.host.error = e.message
        this.alert = {
          type: 'alert-danger',
          message: e.message
        }
      }
    },
    async getImage(item) {
      minioClient.getObject(item.bucket, item.name, (err, dataStream) => {
        // shouldn't be "not found" as checked above (statObject), so just return error message
        if (err) return next(err)

        let chunks = []
        dataStream.on('data', function (chunk) {
          chunks.push(chunk)
        })

        dataStream.on('end', () => {
          let data = escape(Buffer.concat(chunks || []).toString('base64'))
          let mimetype = mime.lookup(item.name)

          this.$set(item, 'src', `data:${mimetype};base64,${data}`)
        })
      })
    },
    open(item) {
      minioClient.getObject(this.bucket, item.name, function (err, dataStream) {
        // shouldn't be "not found" as checked above (statObject), so just return error message
        if (err) return next(err)
        let chunks = []
        dataStream.on('data', function (chunk) {
          chunks.push(chunk)
        })

        dataStream.on('end', function () {

          let data = escape(Buffer.concat(chunks || []).toString('base64'))
          let mimetype = mime.lookup(item.name)

          let win = window.open();
          win.document.write(`
            <iframe
              src="data:${mimetype};base64,${data}"
              style="
                position: fixed;
                top: 0px;
                bottom: 0px;
                right: 0px;
                width: 100%;
                border: none;
                margin: 0;
                padding: 0;
                overflow: hidden;
                height: 100%;
            "></iframe>
          `);
          //win.focus()
        })
      })

    }
  }
}
</script>

<style lang="scss" scoped>
.page-header h1 {
  font-size: 1.4rem;
}
.content {
  width: 100%;
  min-height: calc(100vh - 56px);
  max-height: calc(100vh - 56px);
  overflow-y: auto;
}

.table-icon {
  padding: 5px;
  border-radius: 50%;
  background: #e9ecef;
}
</style>
